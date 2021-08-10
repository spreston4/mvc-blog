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
                include: [{ model: User }, { model: Comment }],
            },
            {
                where: {
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

// Create post
router.post('/', async (req, res) => {

    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

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
router.delete('/:id', (req, res) => {

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