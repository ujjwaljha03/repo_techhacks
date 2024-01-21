"use client"

import { FormEvent, useState } from 'react';
import { ScrapAndStoreProducts } from './ScrapAndStoreProducts';

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState("");


    const isValidAmazonProductURL = (url) => {
        try {
            const parsedURL = new URL(url);
            const hostname = parsedURL.hostname;

            if (
                hostname.includes('amazon.com') ||
                hostname.includes('amazon.') ||
                hostname.endsWith('amazon')
            ) {
                return true;
            }
        } catch (error) {
            return false;
        }

        return false;
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        if (!isValidLink) return alert('Please provide a valid Amazon link')

        try {
            setIsLoading(true);


            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form
            className="search"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Type Your Product Name"
                className="searchBar"
            />

            <button
                type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </form>
    )
}

export default Searchbar