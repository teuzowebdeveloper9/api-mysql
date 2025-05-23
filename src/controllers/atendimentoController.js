import atendimentoModels from "../models/atendimentoModels.js"



class AtendimentoController  {
    search(){
      return atendimentoModels.listar()
    }
    create(){
      return "creating a service"
    }
    toUpdate(id){
      return `updating a service ${id}`
    }
    delete(id){
      return `deleting a service ${id}`
    }



}

export default new AtendimentoController