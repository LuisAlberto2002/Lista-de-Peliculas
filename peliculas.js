const {model,Schema}=require('mongoose');

const peliSchema=new Schema({
    name:{type:String,require:true},
    synopsis:{type:String, require:true},
    genre:{type:String, require:true},
    duration:{type:Number,require:true},
    director:{type:String,require:true},
    actors:{type:String, default:'Unknow'}
});

module.exports=model('peliculas',peliSchema);
