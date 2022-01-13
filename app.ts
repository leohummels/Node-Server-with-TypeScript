import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//para iniciar o servidor: npx tsnd app.ts
app.listen(3000, () => console.log('Running...'))
