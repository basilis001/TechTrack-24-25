// Import the apiUtil.js module with the exported functions.
import { fetchPosts } from './apiUtil.js';

// Display only the first 5 post title and body. Function is not complete, fill in the blanks.
                  //async function displayPosts() {
                    //posts.slice(0, 5).forEach((post) => {
                      //console.log(`Title: ${post.title}`);
                      //console.log(`Body: ${post.body}`);
                    //});
                  //}

                  //displayPosts();


// Function to fetch and display the first 5 posts
async function displayPosts() {
  try {
    // Fetch the posts using the fetchPosts function
    const posts = await fetchPosts();
    
    // Display the first 5 posts
    posts.slice(0, 5).forEach((post) => {
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    });
  } catch (error) {
    console.error("Error displaying posts:", error);
  }
}

// Call the function to display the posts
displayPosts();





//async function displayPosts() {
  //try {
    //const posts = await fetchPosts();
    //console.log(posts);  // Handle or display the posts as needed
  //} catch (error) {
    //console.error("Error fetching posts:", error);
  //}
//}

//displayPosts();