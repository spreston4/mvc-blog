// Edit post title & content from the edit post form on the edit post page
const editPostHandler = async (event) => {

    event.preventDefault();

    const title = document.querySelector("#edit-post-title").value.trim();
    const content = document.querySelector('#edit-post-content').value.trim();
    const post_id = document.querySelector('#edit-post-form').dataset.post_id;

    if (title && content) {
        const response = await fetch(`/api/posts/edit/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Update failed.');
        }
    }
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editPostHandler);

