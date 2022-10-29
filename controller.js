//aqui se hace toda la logica
const {userData} = require('./data');

const getUserData = async (req, res) => {
    try{
        //req tiene body y params
        const {params : {id}} = req;

        //x-lambda funcion, se ejecuta n numero de veces
       const currentUser = userData.find(x => x.id === id)
        
        const {
            firstName,
            lastName, 
            maidenName, 
            age, 
            email, 
            address, 
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
        res.send(error);
    }
}


const updateUserAddress = async(req,res) => {
    try {
        const {params : {id}, body: newAddress} = req;
       const currentUser = userData.find(x => x.id === id)
       const user = {...currentUser, address: newAddress} //sobrescribe
       
       res.send({
        status: 200,
        user
       });
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getUserData, updateUserAddress
}

//crear una nueva rama "perdon"
//checkout - hace una copia de todo lo wue esta en la rama en donde estas