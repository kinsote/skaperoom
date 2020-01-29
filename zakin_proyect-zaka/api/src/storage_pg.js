const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    password: '123456',
    port: 5432,
    database: 'users'
})

const saveUser = async (username, password, birthday, email,) => {
//avatar
    const client = await pool.connect();


    const selectResult = await pool.query(`select * from users.usuario where email = '${email}'`);

    if (selectResult.rows.length !== 0) {
        return 'usuario repetido';
    }

    const user = await pool.query(`insert into users.usuario (name, birthday, password, email)
    values ('${username}','${birthday}','${password}','${email}')`);
//'avatar, ${avatar}'
    client.release();

    return;
}

const getUserByUsername = async (username) => {
    const client = await pool.connect()

    const resultSelect = await client.query(`select password
    from users_schema.usuario where username='${username}'`)

    if (resultSelect.rows.length === 0) {
        throw Error('unknown-user');
    }
    return { password: resultSelect.rows[0].password };
}


const deleteUser = async (id) => {
    const client = await pool.connect()

    const result = await client.query(`delete * from usuario where id='${id}'`)

    client.release();

    if (err) {
        return console.error('Error executing query', err.stack)
    }
    return result;

}

module.exports = {
    saveUser,
    getUserByUsername,
    deleteUser

}