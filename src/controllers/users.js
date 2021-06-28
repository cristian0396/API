const conection = require('../bases/queries/usersQueries');

module.exports = {
    createNewUser :async function (req, res) {
    	var {username, correo, contrasena} = req.body;
        var result =  await conection.createNewUser(username, correo, contrasena);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUser : async function(req, res, next){
        var id = req.params.id;
        var usuarios;
        res.setHeader('Content-Type', 'application/json');
        console.log(id);
        if (id == undefined){
            usuarios = await conection.getAllUsers();
            res.send(JSON.stringify(usuarios, null, 4));
            console.log("Entré al allusers");
        }
        else{
            usuarios = await conection.getUserById(id);
            res.send(JSON.stringify(usuarios, null, 4));
        }
        //res.sendStatus(400);  
        console.log("despues");
    },

    updateUser : async function(req, res) {
    	var {id, username, correo, contrasena } = req.body;
        var result =  await conection.updateUser(id, username, correo, contrasena);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUser : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteUser(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}