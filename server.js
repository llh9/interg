const express =require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Holla World!')
})

app.listen(port, () => {
    console.log(`App's listening on port ${port}`)
})