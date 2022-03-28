const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
    if (req.session.user) {
        let user = {
          username: req.session.user.username,
          email: req.session.user.email
        }
        console.log(user)
        res.redirect("https://discord.com/api/oauth2/authorize?client_id=844891999701434368&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20guilds")
    }
});

router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/forbidden'
}), (req, res) => {
    res.status(200).send('Successfully logged in');
});

module.exports = router; 