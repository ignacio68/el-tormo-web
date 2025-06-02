// index.js
import express from 'express'
const app = express()

app.use((req, res, next) => {
  res.redirect(301, `https://eltormodeclara.com${req.originalUrl}`)
})

// Tu lógica habitual
app.get('/', (req, res) => {
  res.send('Esta ruta no debería usarse si redirección funciona.')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor activo en puerto ${port}`)
})
