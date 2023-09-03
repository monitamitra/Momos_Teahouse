
const config = require("./dbConfig"), 
Customer = require("./Customer"),
sql = require("mssql");


const getCustomer = async(PhoneNumber) => {
try {
    let pool = await sql.connect(config);
    let customers = await pool.request().query
    (`SELECT * FROM CustBalances WHERE CustPhoneNumber = '${PhoneNumber}'`);
    return customers;
}
catch(error) {
    console.log(error);
}
}

const createCustomer = async(Customer) => {
    try {
        let pool = await sql.connect(config);
        let customers = await pool.request().query(`INSERT INTO CustBalances VALUES 
        ('${Customer.PhoneNumber}', ${Customer.RewardsBalance}, ${Customer.GiftCardBalance})
        `);
        return customers;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {getCustomer, createCustomer};