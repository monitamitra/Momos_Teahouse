
const config = {
    user: "Test", 
    password: "foo", 
    server: "TABATHA27", 
    database: "CustomerInfo",
    options: {
        trustServerCertificate: true, 
        trustedConnection: false, 
        enableArithAbhort: true,
        instancename: "SQLEXPRESS"
    }, 
    port: 1433
}

module.exports = config;