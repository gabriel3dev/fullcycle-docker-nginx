const express = require('express');
const app = express()
const mysql = require('mysql');
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

function nomeAleatorio() {
    const nomes = ["João", "Maria", "José", "Ana", "Pedro"];
   
    const index = Math.floor(Math.random() * nomes.length);

    return nomes[index];
} 

app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(name) values ('${nomeAleatorio()}')`
    connection.query(sql);

    const namesHTML = [];

    namesHTML.push(`<h1>Full Cycle Rocks!</h1>`)

    connection.query("SELECT * FROM people", function(err, result, fields) {
        if(err) throw err;

        result.map(people => { namesHTML.push(`<p>${people.name}</p>`); })

        res.status(200).send('<div>'+namesHTML.join('')+'</div>')

        connection.end();
    })    
})

app.listen(port, () => {
    const connection = mysql.createConnection(config);
    const sql = `CREATE TABLE IF NOT EXISTS people (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id));`;
    connection.query(sql);
    connection.end();
        
    console.log('Rodando na porta '+port)
})
