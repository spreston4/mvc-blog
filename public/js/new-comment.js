const newCommentHandler = async(event) => {

    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#comment-content').dataset.post_id;

    if (content) {

        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
            headers: { 'Content-Type': 'application/json '},
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Comment failed.')
        }
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', newCommentHandler);