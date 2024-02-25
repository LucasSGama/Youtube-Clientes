CREATE TABLE clientes (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL,
    cpf VARCHAR(20) NOT NULL,
    address VARCHAR(250) NOT NULL,
    telephone INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
