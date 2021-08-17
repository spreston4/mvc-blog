// Create a new post from the new post page
const newPostHandler = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {

        const response = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post failed.');
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);