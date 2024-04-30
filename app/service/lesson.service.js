const {poolPromise} = require('../../config/database')

exports.read = async () => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT id,word FROM lesson`)
    return rs.recordset;
}

exports.readById = async(id) => {
    const pool = await poolPromise;
    const rs = await pool
                .request()
                .query(`SELECT * FROM lesson WHERE id = ${id} `);
    return rs.recordset;
}
