const sql = require('mssql/msnodesqlv8');

module.exports = new sql.ConnectionPool({
  database: 'parkingSystem',
  server: 'localhost\\SQLEXPRESS01',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
});
