const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get all comments
router.get('./', async (req, res) => {

    try {
        const commentData = await Comment.findAll(
            {
                include: [{ model: User }, { model: Post }],
            },
            {
                where: {
                    user_id: req.session.id,
                },
            }
        );

        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Get indivdual comment
router.get('./:id', async (req, res) => {

    try {
        const commentData = await Comment.findByPk(
            req.params.id,
            {
                include: [{ model: User }, { model: Post }],
            },
            {
                where: {
                    user_id: req.session.id,
                },
            }
        );

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }

        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Create comment
router.post('/', async (req, res) => {

    try {
        const commentData = await Comment.create({
            post_id: req.body.post_id,
            user_id: req.session.user_id,
            content: req.body.content
        });

        res.status(200).json(commentData);

    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// Update comment
router.put('/:id', async (req, res) => {

    try {
        const commentData = await Comment.update(
            {
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.id,
                },
            }
        );

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }

        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete comment
router.delete('./:id', async (req, res) => {

    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;