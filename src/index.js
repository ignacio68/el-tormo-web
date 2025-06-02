// index.js
import express from 'express'
const app = express()

app.use((req, res, next) => {
  const host = req.headers.host
  if (
    host === 'eltormorestaurante.com' ||
    host === 'www.eltormorestaurante.com'
  ) {
    const redirectTo = `https://eltormodeclara.com${req.originalUrl}`
    return res.redirect(301, redirectTo)
  }
  next()
})

// Tu lógica habitual
app.get('/', (req, res) => {
  res.send('Esta ruta no debería usarse si redirección funciona.')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor activo en puerto ${port}`)
})
