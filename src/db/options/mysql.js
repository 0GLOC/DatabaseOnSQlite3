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

let db = knex(dbMysql)
try {
    let exist = await db.schema.hasTable('ecommerce');
    if (exist) {
        //await db('ecommerce').del();
    } else {
        await db.schema.createTable('ecommerce', table => {
            table.primary('id');
            table.increments('id');
            table.string('title', 30).nullable(false);
            table.integer('price').nullable(false);
            table.string('thumbnail', 50).nullable(false);
            table.string('descripcion', 100);
            table.integer('code').nullable(false);
            table.integer('timestamp').nullable(false);
        })
    }
} catch (error) {
    console.log(error);
}

export default db;