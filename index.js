/*var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var db = new sqlite3.Database('./my-app/livros.db');
db.run('CREATE TABLE IF NOT EXISTS livros(id INTEGER, name TEXT, categoria TEXT)');
app.get('/', function(req,res){
    res.send("<h3> Hi there, You are going to perform CRUD operations.............[CREATE] Please enter 'http://localhost:3000/add/(id number)/(nome)/(categoria)' to add new employee to the database.........................[READ] 'http://localhost:3000/view/(id number)' to view an employee.........................[UPDATE] 'http://localhost:3000/update/(id number)/(new nome)/(new categoria)' to update an employee.....................[DELETE] 'http://localhost:3000/del/(id number)' to delete an employee...............................Before closing this window, kindly enter 'http://localhost:3000/close' to close the database connection <h3>");
  });
  app.get('/add/:id/:nome/:categoria', function(req,res){
    db.serialize(()=>{
      db.run('INSERT INTO livros(id,nome,categoria) VALUES(?,?,?)', [req.params.id, req.params.nome, req.params.categoria], function(err) {
        if (err) {
          return console.log(err.message);
        }
        console.log("New employee has been added");
        res.send("New employee has been added into the database with ID = "+req.params.id+ " and Name = "+req.params.name);
      });
  });
  });
  app.get('/view/:id', function(req,res){
    db.serialize(()=>{
      db.each('SELECT id ID, name NAME FROM emp WHERE id =?', [req.params.id], function(err,row){     
        if(err){
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
        console.log("Entry displayed successfully");
      });
    });
  });
  app.get('/update/:id/:name', function(req,res){
    db.serialize(()=>{
      db.run('UPDATE emp SET name = ? WHERE id = ?', [req.params.name,req.params.id], function(err){
        if(err){
          res.send("Error encountered while updating");
          return console.error(err.message);
        }
        res.send("Entry updated successfully");
        console.log("Entry updated successfully");
      });
    });
  });
  app.get('/del/:id', function(req,res){
    db.serialize(()=>{
      db.run('DELETE FROM emp WHERE id = ?', req.params.id, function(err) {
        if (err) {
          res.send("Error encountered while deleting");
          return console.error(err.message);
        }
        res.send("Entry deleted");
        console.log("Entry deleted");
      });
    });
  });
  app.get('/close', function(req,res){
    db.close((err) => {
      if (err) {
        res.send('There is some error in closing the database');
        return console.error(err.message);
      }
      console.log('Closing the database connection.');
      res.send('Database connection successfully closed');
    });
  });
  server.listen(4200,function(){ 
    console.log("Server listening on port: 4200");
});*/
