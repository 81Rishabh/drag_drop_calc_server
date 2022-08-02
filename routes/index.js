const express = require('express');
const router = express.Router();
const Alpha = require('../modal/Alphabates');

router.get('/' , async function (req, res) {
    try {
        const alpha = await Alpha.find({});
        return res.status(200).json({
            message : 'success',
            data : alpha
        });
    } catch (error) {
        return res.status(500).json({
            message : 'Internal server error',
            success : false
        })
    }
});

module.exports = router;