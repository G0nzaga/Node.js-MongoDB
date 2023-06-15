const mongoose = require('mongoose');
const articleModel= require('./article');

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser:true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);





// Article.findByIdAndUpdate("648a18a10a58189e0e200f10", {title: "Vue do zero", author: "Lima", body: "Vue.js do zero"}).then (() =>{
//     console.log("Atualizado")
// }).catch((err) =>{
//     console.log(err);
// })


//Deletar
// Article.findByIdAndDelete('648a1abf9c9ab98e39bf48b2').then(() =>{
//     console.log("Dado removido")
// }).catch(err =>{
//     console.log(err)
// })


//Listar artigos
Article.findOne({}).then(article =>{
    console.log(article)
}).catch(err =>{
    console.log(err)
})














// Cadastro
// const artigo = new Article({
//     title: 'Aulas',
//     author: 'Luiz',
//     body: 'Aulas de programação no IFPB',
//     special: true,
//     resume:{
//         content: "Eu",
//         author: "Gonzaguinha"
//     }
// })

// artigo.save().then(() =>{
//     console.log("Artigo salvo")
// }).catch(err =>{
//     console.log(err)
// })