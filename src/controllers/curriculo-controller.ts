import { data as dadosCurriculo } from '../models/curriculoModel'

export class CurriculoController {
  constructor() {

  }
  public getData() {
    return dadosCurriculo
  }
  getNome() {
    return dadosCurriculo.name
  }
  getTitle() {
    return dadosCurriculo.title
  }
  getDescription() {
    return dadosCurriculo.description
  }
  getProfession() {
    return dadosCurriculo.profession
  }
}