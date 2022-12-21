import { createTable, insertLivro, updateLivro, selectLivro, selectLivros, deleteLivro } from './controler/Livro.js'
import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

createTable();

app.get('/livros', async function(req, res){
    let livros = await selectLivros();
    res.json(livros);
    
})
app.get('/livro', async function(req, res){
    let livro = await selectLivro(req.body.id);
    res.json(livro);

})
app.delete('/livro', async function(req, res){
    let livro = await deleteLivro(req.body.id);
    res.json(livro);
});
app.post ('/livro',async function(req, res){
    /*insertLivro(req.body)
    res.json({
        "statucCode": 200
    })
    */
    let livro = await insertLivro(req.body);
    res.json(livro);

})
app.put ('/livro', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode":"400",
            "msg":"Você precisa informar um id"
        })
    }else{
        updateLivro(req.body)
    res.json({
        "statucCode": 200
    })
}
});


app.listen(3000, ()=>console.log("Api rodando"))

https.createServer({
    cert:fs.readFileSync('./SSL/code.crt'),
    key:fs.readFileSync('./SSL/code.key')
},app).listen(3001,()=>console.log("Rodando em https"));