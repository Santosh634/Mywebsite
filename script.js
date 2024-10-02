document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my simple website!');

    const fetchButton = document.getElementById('fetch-posts');
    const postList = document.getElementById('post-list');

    fetchButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            // Clear existing posts
            postList.innerHTML = '';

            // Display the fetched posts
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.title; // Display the post title
                postList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    });
});
