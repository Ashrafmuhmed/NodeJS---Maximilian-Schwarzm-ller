const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function getPosts() {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        console.log('Error');
        return [];
    } else {
        const data = await response.json();
        console.log(data);
        return data;
    }
}

class Post {
    constructor(title, body, userId, id) {
        this.title = title;
        this.body = body;
        this.userId = userId;
        this.id = id;
    }
}

// Fetch posts and handle the promise
async function loadPosts() {
    const postsData = await getPosts(); // Wait for getPosts to resolve
    const posts = [];

    // Iterate over the postsData
    for (let post of postsData) {
        posts.push(new Post(post.title, post.body, post.userId, post.id));
    }

    // Log the posts
    posts.forEach(post => {
        console.log(post);
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    });
}

loadPosts(); // Call the function to load and display posts
