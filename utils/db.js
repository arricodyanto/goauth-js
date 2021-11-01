const mongoose = require('mongoose');
const userModel = require('./users');
mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    // mongoose.connect('mongodb://127.0.0.1:27017/skilltest', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })


// Menambahkan 1 data
// const user1 = new userModel({
//     id: '123131',
//     nama: 'Arrrico',
//     email: 'arricohandyanto@gmail.com',
//     pass: '12345'
// })

// user1.save().then((userModel) => console.log(userModel))