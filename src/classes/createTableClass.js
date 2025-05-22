class Tables {
    init(connection) {
        this.connection = connection
    }

    createTableAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS atendimento(
            id int NOT NULL AUTO_INCREMENT PEIMARY KEY,
            DATA DATE,
            servico VARCHAR(255),
            cliente VARCHAR(100),
            estado ENUM('á caminho', 'concluido', 'cancelado') DEFAULT 'á caminho'

        );`;
        this.connection.query(sql, (error) => {
            if(error){
                console.log("querry mal sucedido na criação da tabela atendimento");
                console.log(error.message());
               
            }
        });

        console.log("tabela atendimento criada com sucesso");
    }
}