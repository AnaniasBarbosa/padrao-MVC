import createHttpError from "http-errors"
import express, { Request, Response, NextFunction, Errback } from "express"
import path from "path"
const app = express()


import { router as routerCurriculo } from "./routes/curriculo"
import { router as routerHome } from "./routes/home"

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../views"))

app.get("/", routerHome)
app.get("/curriculo", routerCurriculo)

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createHttpError(404))
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('404', { title: "", version: "" });
})

export { app }