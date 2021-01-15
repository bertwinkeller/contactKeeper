const mongoose = require('mongoose')
const config = require('config')



//dotenv
require('dotenv').config()
const db = process.env.MONGO_URI

const connectDB = async () => {

    try {

        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true
        })

        console.log('Database Connected')
    } catch (err) {

        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB