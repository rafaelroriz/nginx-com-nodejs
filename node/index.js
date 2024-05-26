const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql');

const write = (db) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO people(name) values('Roriz');`;
        db.query(sql, (error, results) => {
            if (error) reject(error);
            resolve(results);
        })
    })
}

const read = (db) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM people', (error, results) => {
            if (error) reject(error);
            resolve(results);
        })
    })
}

app.get('/', async (req, res) => {
    const db = mysql.createConnection(config);
    await write(db).catch(console.log);
    const peoples = await read(db).catch(console.log);
    db.end();
    const rows = peoples.map(row => `<li>${row.name}</li>`);
    res.send(`<h1>Full Cycle Rocks!!</h1><ul>${rows.join('')}</ul>`);
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
