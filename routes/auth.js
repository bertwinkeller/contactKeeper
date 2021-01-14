const express = require('express')

const router = express.Router()


//@route GET api/users
//@desc GET logged in user
//@access Private
router.get('/', (req, res) => {
    res.send('Retrieved a user')
})


//@route POST api/users
//@desc Auth user & get token
//@access Public
router.post('/', (req, res) => {
    res.send('Log in user')
})

module.exports = router