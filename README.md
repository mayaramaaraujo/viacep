# Aplicação Full Stack utilizando a API ViaCep integrada no backend.

### Para testar o projeto é necessário: 
#### criar um banco de dados sql com a tabela 'address':
```sql
CREATE TABLE address (
	  id VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
    cep VARCHAR(255) NOT NULL UNIQUE,
    logradouro VARCHAR(255),
    complemento VARCHAR(255),
    bairro VARCHAR(255),
    localidade VARCHAR(255),
    uf VARCHAR(3)
);
```

#### criar um arquivo .env com as seguintes variáveis com os dados do banco criado:
```js
DB_HOST = 
DB_PORT = 
DB_USER = 
DB_PASSWORD = 
DB_NAME = 
```

#### rodar no diretório viacep/backend o comando: 
<p>
npm run start
</p>

#### rodar no diretório viacep/frontend em outro terminal o comando: 
*npm run start*
