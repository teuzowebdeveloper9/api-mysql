class Tables {
    init(connection) {
        this.connection = connection;
    }

    async createTableAtendimentos() {
        const sql = `
          CREATE TABLE IF NOT EXISTS atendimento(
            id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE,
            servico VARCHAR(255),
            cliente VARCHAR(100),
            estado ENUM('a caminho', 'concluido', 'cancelado') DEFAULT 'a caminho'
          );
        `;

        try {
            await this.connection.query(sql);
            console.log("tabela atendimento criada com sucesso");
        } catch (error) {
            console.log("query mal sucedido na criação da tabela atendimento");
            console.log(error.message);
        }
    }
}

export default Tables;
