const deletePostHandler = async (event) => {

    event.preventDefault();

    const post_id = document.querySelector('#edit-post-form').dataset.post_id;

    const response = await fetch(`/api/posts/delete/${post_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Delete post failed');
    }
};

document
    .querySelector('#edit-post-form')
    .addEventListener('reset', deletePostHandler);