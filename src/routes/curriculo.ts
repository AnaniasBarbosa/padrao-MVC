import { Router } from "express"
import { CurriculoController } from "../controllers/curriculo-controller"
const router = Router()
const curriculo = new CurriculoController()

router.get("/curriculo", (req, res) => {
  const dadosCurriculo = curriculo.getData()
  return res.render("./curriculo/PaginaUm", dadosCurriculo)
})

export { router }


