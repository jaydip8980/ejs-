import express from "express";
const app = express()
const port = process.env.PORT || '3000'
import web from "./route/web.js";

// set templet engine
app.set('view engine', 'ejs')
// load routes
app.use('/', web);

app.listen(port, () => { console.log(`server Listening on port ${port}`) })