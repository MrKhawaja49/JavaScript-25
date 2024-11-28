const accountId = 335008
let accountEmail = "hassan876@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"

// accountId = 2

accountEmail = "ali876@gmail.com"
accountPassword = "67890"
accountCity = "Islu"
let accountState
/*
    Prefer not to use 'var'
    because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

