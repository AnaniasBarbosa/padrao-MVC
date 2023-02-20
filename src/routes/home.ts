import { Router } from "express"
const router = Router()

router.get("/", (req, res) => {
  res.render("home", {
    title: "Estudo Padrão Arquitetural MVC",
    version: "0.0.0"
  })
})

export { router }