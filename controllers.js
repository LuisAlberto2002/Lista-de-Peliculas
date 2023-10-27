
const peliModel=require('./../models/peliculas');

class pelisController{
    mostrar(req,res){
        peliModel.find().then(response=>{
            console.log('respuesta: ', response);
            res.send(response);
        }).catch(e=>{
            res.sendStatus(500);
            console.log('Error: ',e);
        })
    }
    add(req,res){
        const newPeli=req.body;
        console.log(newPeli);
        console.log('Se ha agregado una nueva pelicula');
        

    }
}


module.exports=new pelisController();