const sqlite3 = require("sqlite3").verbose() // importar a dependência do sqlite3

const db = new sqlite3.Database("./src/database/database.db") // criar o objeto que irá fazer operações no banco de dados
 
module.exports = db

// criar uma tabela com comando sql
db.serialize(() => { 

    //db.run(`  
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        address TEXT,
    //        address2 TEXT,
    //        state TEXT,
    //        city TEXT,
    //        items TEXT
    //    );
    //`)

    // inserir dados na tabela
    //const query = `
    //    INSERT INTO places (
    //        image,
    //        name,
    //        address,
    //        address2,
    //        state,
    //        city,
    //        items
    //    ) VALUES (?,?,?,?,?,?,?);
    //`

    //const values = [
    //    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80",
    //    "Casa da Planta",
    //    "Av. São Pedro, Jardim América",
    //    "N° 800",
    //    "São Paulo",
    //    "São Paulo",
    //    "Resíduos Orgânicos, Óleo de Cozinha"
    //]

    //function afterInsertData(err) {
    //    if(err) {
    //        return console.log(err)
    //    }

    //    console.log("Cadastrado com sucesso")
    //    console.log(this)
    //}

    //db.run(query, values, afterInsertData)


    // consultar os dados da tabela
    //db.all(`SELECT name FROM places`, function(err, rows) {
    //    if(err) {
    //        return console.log(err)
    //    }

    //    console.log("Aqui estão seus registros: ")
    //    console.log(rows)
    //})


    // deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
    //    if(err) {
    //        return console.log(err)
    //    }
    

    //    console.log("Registro deletado com sucesso")
    //})


    // deletar tudo
    //db.run(`DELETE FROM places`)
        
    //    console.log("Registro deletado com sucesso")

})