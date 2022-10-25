const data = require('./data');
const {db} = data;

const getUserData = async (req, res) => {
    try{
        const {userData : {id}} = req;
        const usersDB = db.collection('users').doc(id);
        const {userData: { fullName: {firstName,lastName, maidenName}, age, email, address, jobTitle} } = await usersDB.get();
        /* console.log("response:",response); */
        res.send({
            status: 200,
            fullName: user.fullName,
            age: user.age,
            email: user.email,
            adress: user.address,
            jobTitle: user.jobTitle
        });
    } catch (error) {
        res.send(error);
    }
}


const updateUserAddress = async(req,res) => {
    try {
        const {userData : {id}} = req;
        //const { id, time, author, name, rating } = movie;
        //const moviesDB = db.collection('movies').doc(id);
       const resp = await usersDB.update({
        //name, time, rating, author
       });
       res.send({
        status: 200,
        id
       });
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getUserData, updateUserAddress
}

