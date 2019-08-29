

module.exports = (express, app) => {

    //rutas '/todo'
    app.use("/todo", require('./todos/todo')(express))

    //si no encuentra niguna coincidencia de ruta
    app.all("**", (req, res)=> res.status(404).send({err:"Pagina no encontrada"}) )


}