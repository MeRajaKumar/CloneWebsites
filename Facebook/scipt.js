const stories = [
    { type: 'image', content: 'pic.jpg' },
    { type: 'image', content: 'https://images.unsplash.com/photo-1737789360528-41739906f937?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'image', content: 'https://imgs.search.brave.com/xoDVPvS2xAMbEgmHm7_zsp85jVNRuRaR_cQKf_yd7Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/Ni8yNi8xNC80Ni9p/bmRpYS01MzQyOTI3/XzEyODAuanBn' },
    { type: 'image', content: 'https://imgs.search.brave.com/cPXB5ITG1yTl3vPyec3UWyiNLUtbQmIudxoM5x2pJMg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/Ni8yMC8xNi8xMy9t/YWxlLTUzMjE1NDdf/NjQwLmpwZw' }
];

function renderStories(storyData) {
    const container = document.getElementById('story-container');

    storyData.forEach(story => {
        const box = document.createElement('div');
        box.className = 'story-box';

        if (story.type === 'image') {
            const img = document.createElement('img');
            img.src = story.content;
            box.appendChild(img);
        } else if (story.type === 'text') {
            const text = document.createElement('p');
            text.textContent = story.content;
            box.appendChild(text);
        }

        container.appendChild(box);
    });
}

renderStories(stories);

const postmessage = [
    { type: 'image', content: 'post.jpg' },
    { type: 'image', content: 'post2.jpg' }
];
function contentData(post) {
    const container = document.getElementById("content-container");
    post.forEach(render => {
        const box = document.createElement('div');
        box.className = "content-box";
        if (render.type === "image") {
            const img = document.createElement('img');
            img.className = 'post-img';
            img.src = render.content;
            box.appendChild(img);
        } else if (render.type === "text") {
            const text = document.createElement('p');
            text.textContent = render.content;
            box.appendChild(text);
        } else if (render.type === "video") {
            const video = document.createElement('video');
            video.src = render.content;
            video.controls = true;
            box.appendChild(video);
        }
        container.appendChild(box);
    });
}
contentData(postmessage);