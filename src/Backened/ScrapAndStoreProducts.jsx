import { revalidatePath } from "next/cache";
import React, { useState } from "react";
import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../mongoose";
import Product from "/ProductModel";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "./Utils";
import { User } from "./Types";
import { generateEmailBody, sendEmail } from "./Nodemailer.jsx";

import {
  getProductById,
  getAllProducts,
  getSimilarProducts,
  addUserEmailToProduct,
} from "./yourFunctions"; // Replace with the correct path to your functions

const ScrapeAndStoreProducts = () => {
  const [productId, setProductId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState("");

  const handleScrapeAndStoreProduct = async (productUrl) => {
    try {
      connectToDB();

      const scrapedProduct = await scrapeAmazonProduct(productUrl);
      if (!scrapedProduct) return;

      let product = scrapedProduct;

      const existingProduct = await Product.findOne({ url: scrapedProduct.url });

      if (existingProduct) {
        const updatedPriceHistory: any = [
          ...existingProduct.priceHistory,
          { price: scrapedProduct.currentPrice }
        ]

        product = {
          ...scrapedProduct,
          priceHistory: updatedPriceHistory,
          lowestPrice: getLowestPrice(updatedPriceHistory),
          highestPrice: getHighestPrice(updatedPriceHistory),
          averagePrice: getAveragePrice(updatedPriceHistory),
        }
      }

      const newProduct = await Product.findOneAndUpdate(
        { url: scrapedProduct.url },
        product,
        { upsert: true, new: true }
      );

      revalidatePath(`/products/${newProduct._id}`);
    } catch (error: any) {
      throw new Error(`Failed to create/update product: ${error.message}`)
    }
  }

  // Additional logic or state updates after scraping and storing the product

  const handleGetProductById = async (productId) => {
    try {
      connectToDB();

      const product = await Product.findOne({ _id: productId });

      if (!product) return null;

      return product;
    } catch (error) {
      console.log(error);
    }
  }
  // Handle the product data, e.g., update state or show in UI

  const handleGetAllProducts = async () => {
    try {
      connectToDB();

      const products = await Product.find();

      return products;
    } catch (error) {
      console.log(error);
    }
    // Handle the products data, e.g., update state or show in UI
  };

  const handleGetSimilarProducts = async (productId) => {
    try {
      connectToDB();

      const currentProduct = await Product.findById(productId);

      if (!currentProduct) return null;

      const similarProducts = await Product.find({
        _id: { $ne: productId },
      }).limit(3);

      return similarProducts;
    } catch (error) {
      console.log(error);
    }
    // Handle the similarProducts data, e.g., update state or show in UI
  };

  const handleAddUserEmailToProduct = async (productId, userEmail) => {
    try {
      const product = await Product.findById(productId);

      if (!product) return;

      const userExists = product.users.some((user: User) => user.email === userEmail);

      if (!userExists) {
        product.users.push({ email: userEmail });

        await product.save();

        const emailContent = await generateEmailBody(product, "WELCOME");

        await sendEmail(emailContent, [userEmail]);
      }
    } catch (error) {
      console.log(error);
    }
    // Additional logic or state updates after adding user email to product
  };

  return (
    <div>
      {/* UI elements and form inputs for user interaction */}
      <button onClick={() => handleScrapeAndStoreProduct("your-product-url")}>
        Scrape and Store Product
      </button>

      <input
        type="text"
        placeholder="Enter Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleGetProductById}>Get Product by ID</button>

      <button onClick={handleGetAllProducts}>Get All Products</button>

      <input
        type="text"
        placeholder="Enter User Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <button onClick={handleAddUserEmailToProduct}>
        Add User Email to Product
      </button>

      <button onClick={handleGetSimilarProducts}>Get Similar Products</button>
    </div>
  );
};

export default ScrapeAndStoreProducts;