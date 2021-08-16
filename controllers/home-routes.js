const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    const postData = await Post.findAll({
      include: [{ model: User, attributes: ['username'] }]
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', withAuth, async (req, res) => {

  try {

    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: User, attributes: ['username'] }]
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newpost', withAuth, async (req, res) => {

  try {

    res.render('newpost', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/editpost', withAuth, async (req, res) => {

  try {

    res.render('newpost', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id
    })

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;