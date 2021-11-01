const fs = require('fs')
console.log(__dirname) 

try {
  const data = fs.existsSync('../godrive-auta.xlsx')
  console.log(data)
} catch (err) {
  console.error(err)
}

  