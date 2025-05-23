# Atendimentos API

This is a RESTful API for managing "atendimentos" (appointments or services) using Node.js, Express, and MySQL.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for atendimentos
- MySQL database integration
- RESTful API design
- Error handling and appropriate HTTP status codes

## Prerequisites

- Node.js (v14 or later)
- MySQL (v5.7 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
git clone https://github.com/teuzowebdeveloper9/api-mysql 

 cd api-mysql


plainText

2. Install dependencies:
npm install


plainText

3. Set up your MySQL database and update the configuration (see [Configuration](#configuration) section).

## Configuration

Create a `configs.js` file in the root directory with the following content:

```javascript
export const variables = {
HOST: 'your_mysql_host',
USER: 'your_mysql_user',
DB: 'your_database_name',
PORT: 'your_mysql_port',
SERVE: 'your_api_port'
};
Replace the placeholder values with your actual MySQL and API configuration.

Usage
To start the server, run:


plainText
npm start
The API will be available at http://localhost:your_api_port.

API Endpoints
GET /atendimentos: Retrieve all atendimentos
POST /atendimentos: Create a new atendimento
PUT /atendimentos/:id: Update an existing atendimento
DELETE /atendimentos/:id: Delete an atendimento
Database Schema
The atendimento table has the following structure:


sql
CREATE TABLE IF NOT EXISTS atendimento(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  DATA DATE,
  servico VARCHAR(255),
  cliente VARCHAR(100),
  estado ENUM('a caminho', 'concluido', 'cancelado') DEFAULT 'a caminho'
);
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License.
