const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('', {userType: req.session.role});
});

module.exports = router;