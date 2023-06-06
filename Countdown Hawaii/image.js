// Get references to the form, input, and image container
const form = document.getElementById('upload-form');
const input = document.getElementById('image-input');
const container = document.getElementById('image-container');

// Add a submit event listener to the form
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the selected image files
  const files = input.files;

  // Loop through each selected file
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Create a FileReader object to read the file
    const reader = new FileReader();

    // Define the onload event handler for the FileReader
    reader.onload = function(event) {
      // Create a new image element
      const image = document.createElement('img');
    
      // Set the source of the image to the uploaded file
      image.src = event.target.result;

      // Append the image to the container
      container.appendChild(image);
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
  }
});