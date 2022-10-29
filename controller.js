//aqui se hace toda la logica
const {userData} = require('./data');

const getUserData = async (req, res) => {
    try{
        //req tiene body y params
        const {params : {id}} = req;

        //x-lambda funcion, se ejecuta n numero de veces
       const currentUser = userData.find(x => x.id == id)
        
        const {
            firstName,
            lastName, 
            maidenName, 
            age, 
            email, 
            address, 
            company
        } = currentUser;

//teniamos que ver los datos de bd y ver los datos que necesitamos
//template string``-ingresar codigo dentro

        res.send({
            status: 200,
            user: {
                fullName: `${firstName} ${lastName} ${maidenName}`,
                age,
                email,
                address,
                jobTitle: company.title
            }
        });
    } catch (error) {
        console.log(error);
        res.send(error);
        
    }
}


const updateUserAddress = async(req,res) => {
    try {
        const {params : {id}, body: newAddress} = req;
       const currentUser = userData.find(x => x.id == id)
       const user = {...currentUser, address: newAddress} //sobrescribe
       
       res.send({
        status: 200,
        user
       });
    } catch (error) {
        console.log(user)
        console.log(error)
        res.send(error)
    }
}

const createUser = async (req, res) => {
    try {
        const {body: userData} = req;
        //se que esto ni va a jalar, pero lo que queria era que buscara el ultimo id y que a ese le sumara 1 para generar un nuevo id
        const newID = userData.find(x => x.id == id) + 1
        const newUser = await userData.push({
            newID,
            email: "newEmail@something.com"
        }) 

        res.send({
            status: 200,
            users: [
                userData,
                newUser
            ]
        })
    }

    catch (error) {
        console.log(error)
        res.send(error)
    }
}


const deleteUser = async (req, res) => {
    try {
        const {params: {id}}= req;
        const deletedUser = userData.findIndex(x => x.id == id)
        //const deletions = await userData.delete(deletedUser)
        userData.splice(deletedUser,1) //borramos solo 1 elemento

        res.send({
            status: 200,
            users
        })

    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = {
    getUserData, updateUserAddress, createUser, deleteUser
}

//crear una nueva rama "perdon"
//checkout - hace una copia de todo lo wue esta en la rama en donde estas