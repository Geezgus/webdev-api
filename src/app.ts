import express from 'express'

const app = express()
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log('listening on port', port)
})

// https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial
