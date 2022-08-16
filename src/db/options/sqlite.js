import knex from "knex";

const dbMysql = {
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'',
        database:'first_database'
    }
};

const dbSqlite3 = {
    client:'sqlite3',
    connection:{
        filename: './sqliteDatabase.sqlite'
    },
    useNullAsDefault:true
};

let dbLite = knex(dbSqlite3)
try {
    let exist = await dbLite.schema.hasTable('ecommerceMessages');
    if (exist) {
        //await dbLite('ecommerceMessages').del();
    } else {
        await dbLite.schema.createTable('ecommerceMessages', table => {
            table.primary('id');
            table.increments('id');
            table.string('user', 30).nullable(false);
            table.string('message', 50).nullable(false);
            table.string('date', 25);
        })
    }
} catch (error) {
    console.log(error);
}

export default dbLite;