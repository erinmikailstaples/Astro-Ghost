const GhostAdminAPI = require('@tryghost/admin-api');

// Initialize the API client
const api = new GhostAdminAPI({
  url: 'http://localhost:2368',  // Your local Ghost URL
  key: 'YOUR_ADMIN_API_KEY',     // The Admin API Key you copied
  version: "v5.0"
});

// Test function
async function testAPI() {
  try {
    // Example: Create a new post
    const post = await api.posts.add({
      title: 'Test Post from API',
      lexical: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"This is a test post created via the Admin API.","type":"extended-text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'
    });

    console.log('Post created:', post);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the test
testAPI();