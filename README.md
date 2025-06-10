
# hortifruti_crud 🌱

Projeto backend em NestJS para gerenciar operações de CRUD no contexto de hortifruti (produtos, fornecedores, pedidos etc.).

## 🚀 Tecnologias

- NestJS (Node.js + TypeScript)
- SQLite
- Jest (testes)
- TypeORM (ORM para acesso ao banco)

## 📦 Instalação

```bash
git clone https://github.com/jeffersonLucass/hortifruti_crud.git
cd hortifruti_crud
npm install
````

## 🛠️ Execução

### Ambiente de desenvolvimento

```bash
npm run start:dev
```

Acesse a API em `http://localhost:3000`

### Ambiente de produção

```bash
npm run build
npm run start:prod
```

## 🧪 Testes

* Unitários: `npm run test`
* E2E: `npm run test:e2e`
* Cobertura: `npm run test:cov`

## 📂 Estrutura do Projeto

* `src/` – Código-fonte principal
* `db.sqlite` – Banco de dados SQLite
* `test/` – Testes automatizados

## 📬 Endpoints (exemplos) == conferir

* `GET /produtos` – Lista todos os produtos
* `POST /produtos` – Cria um novo produto
* `PATCH /produtos/:id` – Atualiza produto
* `DELETE /pedidos/:id` – Remove pedido

## 👥 Integrantes

* Grazielly Sabino ([@sabinograzielly](https://github.com/sabinograzielly))
* Gustavo Scot([@GustavoScot](https://github.com/GustavoScot))
* Jefferson Lucas ([@jeffersonLucass](https://github.com/jeffersonLucass))
* Kaion Brandão ([@kaionBLima](https://github.com/kaionBLima))



