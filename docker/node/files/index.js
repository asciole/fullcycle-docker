const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'xptolux',
  database:'desafiodb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

let data = Date.now();
let nome = 'ASCIOLE ANDRADE - ' + data.toString();
const sql = `INSERT INTO people(name) values('` + nome + `')`;
const sql2 = `SELECT * FROM people`;
let retorno = '<h1>FullCycle Rocks!!</h1> <p><h3>Lista de Nomes<h3></p>'

console.log(nome);

connection.connect(function(error){
  if(!!error) console.log(error);
   else {
    
    console.log('SQL Database Connected!');
    connection.query(sql, function (err, result, fields){
      if(err) console.log(err);
      console.log(nome + ' - Inserido com sucesso!');
      
      connection.query(sql2, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        
        retorno += '<ul>';
        result.forEach(element => {
          retorno += '<li>' + element.id.toString() + ' - ' + element.name.toString() + '</li>'
        });

        retorno += '</ul>';

        app.get('/', (req, res) => {
          res.send(retorno)
        })

      });

      connection.end();
    });

    

   }
   
});


console.log('Chegou ao Final...');

app.listen(port, () => {
  console.log(`Executando na porta: ${port}`)
})