import { posts } from './data.js';

// name: "Vincent van Gogh",
// username: "vincey1853",
// location: "Zundert, Netherlands",
// avatar: "images/avatar-vangogh.jpg",
// post: "images/post-vangogh.jpg",
// comment: "just took a few mushrooms lol",
// likes: 21

document.getElementById('new-post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const post = document.getElementById('post-url').value;
    const comment = document.getElementById('comment').value;

    const newPost = {
        name: "Raul Crespo",
        username: "Rarahooray",
        location: "Miami, FL",
        avatar: "images/raul-crespo-avatar.jpg",
        post: post,
        comment: comment,
        likes: 0
    };

    posts.unshift(newPost);

    renderFeed();

    event.target.reset();
}
function getPostsHtml() {
    let feedHtml = ``
    posts.forEach((post) => {
        feedHtml += `
            <section class="user-post">
                <div class="user-info-container">
                    <img src="${post.avatar}" class="profile-pic" alt="${post.name}'s avatar photo">
                    <div class="user-info">
                        <p class="user-full-name">${post.name}</p>
                        <p class="user-location">${post.location}</p>
                    </div>
                </div>
                <img src="${post.post}" class="post-img" alt="a self portrait of ${post.name}">
                <div class="engagement-container">
                    <div class="engagement-icon-container">
                        <img src="images/icon-heart.png" class="engagement-icon" alt="a heart icon for liking the post">
                        <img src="images/icon-comment.png" class="engagement-icon" alt="a speech bubble icon for leaving a comment on the post">
                        <img src="images/icon-dm.png" class="engagement-icon" alt="a paper airplane icon for sharing the post">
                    </div>
                    <p class="like-count">${post.likes} likes</p>
                    <p class="caption"><span class="username">${post.username}</span>${post.comment}</p>
                </div>
            </section>
            `
        })
        return feedHtml
}

function renderFeed() {
    const feedContainer = document.querySelector('main')
    feedContainer.innerHTML = getPostsHtml()
}

renderFeed()