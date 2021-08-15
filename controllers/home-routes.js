const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
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

router.get('/dashboard', async (req, res) => {

  try {
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    const postData = await Post.findAll({
      where: {
        id: req.session.user_id
      },
      include: [{ model: User, attributes: ['username']}]
    });

    const posts = postData.map((project) => project.get({ plain: true }));

    req.session.dashboard = true;

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
      dashboard: req.session.dashboard
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newpost', async (req,res) => {

  try{
    if (!req.session.logged_in) {
      res.redirect('/login');
      return;
    }

    req.session.dashboard = true;

    res.render('newpost', {
      logged_in: req.session.logged_in,
      dashboard: req.session.dashboard,
      user_id: req.session.user_id 
    })

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;