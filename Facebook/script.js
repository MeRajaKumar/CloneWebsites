const stories = [
    { type: 'image', content: 'Pic.jpeg' },
    { type: 'image', content: 'https://images.unsplash.com/photo-1737789360528-41739906f937?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'image', content: 'https://images.unsplash.com/photo-1736877967709-66b2648c3a62?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { type: 'image', content: 'https://images.unsplash.com/photo-1579596249184-a56e5c60f62d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
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
    { type: 'image', content: 'post.png' },
    { type: 'image', content: 'post1.png' }
];
function contentData(post) {
    const container = document.getElementById("content-container");
    post.forEach(render => {
        const box = document.createElement('div');
        box.className = "content-box";
        if (render.type === "image") {
            const img = document.createElement('img');
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