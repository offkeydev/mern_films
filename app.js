const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')
const PORT = 8089

const app = express();
app.use(express.json({extended: true}))
//app.use(cors)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api/users', require('./routes/api/users'))



async function start() {
    try {
        //ждём коннекта с БД потом запускаем приложение
        await mongoose.connect('mongodb+srv://user_a1:2572129offkey@cluster0.6d7al.mongodb.net/test-graphql?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => { console.log(`Started on port ${PORT}`) })
    } catch (e) {
        console.log("Server error", e)
        process.exit(1)
    }
}

start();