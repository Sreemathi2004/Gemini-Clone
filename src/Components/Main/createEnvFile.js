const fs = require('fs');

// Define the content of the .env file
const envContent = "GEMINI_API_KEY=your_api_key_here";

// Write the .env file to the project root directory
fs.writeFile('.env', envContent, (err) => {
  if (err) {
    console.error('Error writing .env file:', err);
  } else {
    console.log('.env file has been created successfully!');
  }
});
