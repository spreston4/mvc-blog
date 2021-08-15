const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get all posts
router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll(
            {
                include: [{ model: User }, { model: Comment }],
            },
            {
                where: {
                    user_id: req.session.id,
                },
            }
        );

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Get indivdual post
router.get('/:id', async (req, res) => {

    try {
        const postData = await Post.findByPk(
            req.params.id,
            {
                include: [{ model: User, attributes: ['username'] }],
            },
            {
                where: {
                    user_id: req.session.id,
                },
            }
        );

        const post = postData.get({ plain: true });

        const commentData = await Comment.findAll({
            where: { post_id: post.id },
            include: [{ model: User, attributes: ['username'] }]
        });

        const comments = commentData.map((comment) => comment.get({ plain: true}));

        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }

        res.render('postpage', {
            post,
            comments,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// Create post
router.post('/', async (req, res) => {

    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        console.log(postData);

        res.status(200).json(postData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Update post
router.put('/:id', async (req, res) => {

    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.id,
                },
            }
        );

        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete post
router.delete('/:id', async (req, res) => {

    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
        }

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;