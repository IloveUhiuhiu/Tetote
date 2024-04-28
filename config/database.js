const sql = require('mssql/msnodesqlv8');


const config = {
  driver: 'msnodesqlv8', // Chỉ định driver msnodesqlv8
  connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-1JCOVFJ\\SQLEXPRESS;Database=company;Trusted_Connection=YES;'
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql,
  poolPromise,
};

