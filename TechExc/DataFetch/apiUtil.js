// Write a module that fetches a dataset e.g. 'fake' posts from Json Placeholder. https://jsonplaceholder.typicode.com/posts Use async await, use fetch.

// Define an async function to fetch posts
async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    // Use fetch to get data from the API
    const response = await fetch(url);

    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the response to JSON
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    // Handle any errors during the fetch operation
    console.error("Fetch error:", error);
    throw error;  // Re-throw the error so it can be handled by the caller if needed
  }
}

// Export the function using named exports
export { fetchPosts };

