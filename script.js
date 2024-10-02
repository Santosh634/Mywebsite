document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-image');
    const imageContainer = document.getElementById('image-container');

    fetchButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/random?client_id=yYDYPgqeNxJLiydoWurNkHF7ubDBoYyuE4KGeoq7aZM');
            const data = await response.json();

            // Clear existing images
            imageContainer.innerHTML = '';

            // Create an image element
            const img = document.createElement('img');
            img.src = data.urls.regular; // Get the image URL
            img.alt = data.alt_description || 'Random Image';

            // Append the image to the container
            imageContainer.appendChild(img);
        } catch (error) {
            console.error('Error fetching random image:', error);
        }
    });
});
