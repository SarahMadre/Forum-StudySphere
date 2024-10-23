const mongoose = require('mongoose')

const url="mongodb+srv://user:sarahwebpassword@cluster0.3hmpvks.mongodb.net/forum-mern?retryWrites=true&w=majority&appName=Cluster0";



// module.exports.connect = () =>{
//     mongoose.connect(url,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log('MongoDB connected successfully')
//     }).catch((error) => console.log("Error: ",error))
// }

module.exports.connect = () => {
    mongoose.connect(url)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => console.log("Error: ", error));
};
