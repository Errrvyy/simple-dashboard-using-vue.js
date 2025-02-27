<template>
  <!-- Displays when the products were last updated -->
  <p>Last Updated: {{ lastUpdated }}</p>
  
  <!-- Container for the products table -->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
    <!-- Table definition -->
    <table class="w-full text-sm text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th class="border border-gray-500 p-3 text-left">Product Name</th>
          <th class="border border-gray-500 p-3 text-center">Category</th>
          <th class="border border-gray-500 p-3 text-right">Price</th>
          <th class="border border-gray-500 p-3 text-center w-40">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop over each product and display its details -->
        <tr v-for="(product, index) in products" :key="index">
          <td class="border border-gray-500 p-3 text-left">{{ product.id }}</td>
          <td class="border border-gray-500 p-3 text-center">{{ product.category }}</td>
          <td class="border border-gray-500 p-3 text-right">{{ product.price }}</td>
          <td class="border border-gray-500 p-3 text-center">
            <div class="flex justify-center items-center gap-2">
              <!-- Edit button -->
              <button 
                class="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                @click="editProduct(index)"
              >
                Edit
              </button>
              <!-- Delete button -->
              <button 
                class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                @click="deleteProduct(index)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Button to add a new product -->
    <div class="mt-4 flex justify-end">
      <button 
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
        @click="addProduct"
      >
        Add Product
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';      // Axios for making HTTP requests
import moment from "moment";    // Moment for date formatting
import { ref, onMounted } from "vue";  // Vue reactivity

// Create a reactive variable for the products array.
const products = ref([]);

// Function to edit a product: simply shows an alert for demonstration.
const editProduct = (index) => {
  alert(`Editing product: ${products.value[index].id}`);
};

// Function to delete a product from the array.
const deleteProduct = (index) => {
  if (confirm(`Are you sure you want to delete ${products.value[index].id}?`)) {
    products.value.splice(index, 1);
  }
};

// Function to add a new product by selecting a random post from JSONPlaceholder.
const addProduct = async () => {
  try {
    // Fetch all posts from JSONPlaceholder.
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    // Log the fetched data to the console for debugging.
    console.log("Fetched data from JSONPlaceholder:", response.data);
    
    // Get the array of posts.
    const posts = response.data;
    
    // Generate a random index from 0 to the length of the posts array.
    const randomIndex = Math.floor(Math.random() * posts.length);
    
    // Select a random post.
    const randomPost = posts[randomIndex];
    
    console.log("Randomly selected post:", randomPost);
    
    // Map the random post data to your product structure.
    const newProduct = {
      id: randomPost.title,                   // Use the post title as product name.
      category: `Category ${randomPost.id}`,    // Create a dummy category.
      price: `$${(randomPost.id * 32).toFixed(2)}`, // Calculate a dummy price.
    };
    
    // Add the new product to the products array.
    products.value.push(newProduct);
  } catch (error) {
    console.error("Error adding product", error);
  }
};

// Reactive variable for displaying the last updated time.
const lastUpdated = ref("");

// When the component mounts, perform initial data fetching.
onMounted(async () => {
  // Set the last updated time using moment.js.
  lastUpdated.value = moment().format("MMMM Do YYYY, h:mm:ss a");
  
  try {
    // Fetch posts from JSONPlaceholder.
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    console.log("Fetched data from JSONPlaceholder:", response.data);
    
    // Map the first 20 posts to your product structure.
    products.value = response.data.slice(0, 15).map(post => ({
      id: post.title,                        // Use the post title as product name.
      category: `Category ${post.id}`,         // Dummy category.
      price: `$${(post.id * 32).toFixed(2)}`,    // Dummy price calculation.
    }));
  } catch (error) {
    console.error("Error fetching data from JSONPlaceholder", error);
  }
});
</script>
