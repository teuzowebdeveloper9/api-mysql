import { connectDB } from "../database/conect.js"


class AtendimentoModels {
    constructor() {
        this.sql = " SELECT * FROM atendimentos";
    }

    async listar (){
        try {
            const connection = connectDB();
            const [rows] = await connection.query(this.sql);

            console.log("sucess");
            return rows;

        }
        catch(error){
         console.log(error)
         
          console.log(`unfortunately there was an error: ${error}`);
         throw error;

    }

    }
    

}

export default new AtendimentoModels