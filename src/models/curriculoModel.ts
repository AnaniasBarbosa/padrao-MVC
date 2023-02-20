//ESTE ARQUIVO ESTÁ SENDO UTILIZADO APENAS PARA REPRESENTAR UM BD.
//OPTEI POR UTILIZAR DESSA FORMA POIS, MANTERIA O FOCO NO ESTUDO DE MVC.

const data = {
  title: 'Meu currículo',
  name: 'Ananias Barbosa Gomes',
  profession: 'Software Developer',
  description: 'Experiência em desenvolvimento de bots para automação com JavaScript e frameworks JavaScript',
  experience: [{
    company: 'Mundiale',
    office: 'Software Developer III',
    description: 'Trabalho no squad de desenvolvimento de bots para automação de sistemas web, realizando integrações via api e ou manipulação de DOM'
  },
  {
    company: 'Adaptive',
    office: 'Analista de Suporte',
    description: 'Buscando soluções para demandas fiscais, tributárias e estoque em sistema ERP'
  }],
  education: [{
    institution: 'Pitágoras',
    description: 'Ciências da Computação',
    status: 'Cursando'
  }],
  version: "0.0.0",
  skills: ['backend', 'frontend', 'infra']
}

export { data }