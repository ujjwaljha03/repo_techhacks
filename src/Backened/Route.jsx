import React, { useEffect, useState } from 'react';
import { getLowestPrice, getHighestPrice, getAveragePrice, getEmailNotifType } from "./UtilsUtils";
import { connectToDB } from "./Mongoose";
import Product from "./ProductModel";
import { scrapeAmazonProduct } from "./ScrapeAmazonproduct";
import { generateEmailBody, sendEmail } from "./Nodemailer";

export const maxDuration = 300; // This function can run for a maximum of 300 seconds
export const dynamic = "force-dynamic";
export const revalidate = 0;



const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products'); // Replace with your API endpoint
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error(`Failed to fetch products: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>{product.title}</p>
            {/* Display other product information as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
