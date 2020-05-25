const mongoose = require('mongoose') 

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/jan-tasks-box-app', { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('error', err)
        })
}

module.exports = configureDB