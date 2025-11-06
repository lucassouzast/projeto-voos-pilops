# Pilops - Teste Técnico

## Sobre o projeto

Este projeto consiste em um backend Node.js que expõe dados de voos via API e um frontend React que consome essa API e apresenta as informações conforme o layout do **Figma** fornecido pela **Pilops**.


## Requisitos obrigatórios

- **Typescript** utilizado tanto no frontend quanto no backend.
- **ReactJS** no frontend.
- **NodeJS** no backend.
- Projeto versionado no **GitHub**.
- **README** explicando como rodar backend e frontend.

### Diferenciais implementados

- **Paginação** na lista de voos.
- **Saldo total acumulado**: Endpoint `GET /flights/balance` retorna o saldo total dos voos.
- **Testes unitários** para componentes principais (frontend/src/tests).
- ***Teste de Integração** realizado na pagina inicial Flights
- **Ordenação** por saldo e data.
- **Deploy do projeto completo (site funcional)**: disponível em [https://voos-pilops.onrender.com/](https://voos-pilops.onrender.com/)
- **Documentação da API com Swagger**: disponível em [https://backend-pilops-0krs.onrender.com/api-docs](https://backend-pilops-0krs.onrender.com/api-docs).
- **Tratamento de erros** com alertas amigáveis. (Nesse cenário os erros não acontecem por ser fornecido um JSON. Mas da pra testar tentando acessar a url de um voo inexistente exemplo: https://voos-pilops.onrender.com/flights/FL-SAS)
- **Responsividade mobile** mesmo que não tinha o design mobile no figma, achei que estava implicito cria-lo

---

## Frontend (React)

### Telas

- **Lista de Voos**  
  Mostra todos os voos vindos da API, com paginação e ordenação.

- **Detalhes do Voo**  
  Ao clicar em um voo, abre tela com os dados completos do voo.

## Backend (Node.js)

### Endpoints obrigatórios

- `GET /flights`  
  Lista todos os voos.  

- `GET /flights/:id`  
  Retorna detalhes completos de um voo específico.  

### Endpoint Diferencial
- `GET /flights/balance`  
  Retorna o saldo total dos voos.  

### Como acessar a documentação da API

Após iniciar o backend, acesse [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (mude a porta se necessário).

Ou acesse a documentação da API em produção:  
[https://backend-pilops-0krs.onrender.com/api-docs](https://backend-pilops-0krs.onrender.com/api-docs)

### Para rodar o Frontend

1. Instale as dependências:
    ```sh
    cd frontend
    npm install
    ```
2. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis se necessário.

3. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```
   O frontend estará disponível em `http://localhost:5173`.

### Como rodar o backend

1. Instale as dependências:
    ```sh
    cd backend
    npm install
    ```
2. Inicie o servidor em modo desenvolvimento:
    ```sh
    npm run dev
    ```
   O servidor estará disponível em `http://localhost:3000`.

3. Para rodar os testes:
    ```sh
    npm test
    ```

---

## Decisões técnicas

- **Express** utilizado no backend pela simplicidade e integração com TypeScript.
- **Swagger** para documentação da API.
- **Material UI** no frontend para seguir o design do Figma e garantir responsividade.
- **Vite** para build do front
- **Axios** para requisições.
- **date-fns** para formatação de datas.
- **Vitest** e **Jest** para testes unitários.
- **Estrutura modular** separando controllers, rotas, modelos e dados no backend.
---

## O que faria diferente com mais tempo

- Adicionaria mais testes de integração simples.
- Melhoraria a cobertura dos testes unitários.
- Refatoraria partes do código para facilitar a manutenção e leitura, como separar funções grandes em funções menores.
- filtros por aeroporto ou companhia aérea na lista de voos.
- Um painel/resumo com estatísticas dos voos (total de voos, saldo médio, XP acumulado).

---


## Agradecimentos

******Agradeço à equipe **Pilops** pela oportunidade de participar do teste técnico.****** 
 
Foi de grande enriquecimento, me ajudou a melhorar em alguns aspectos e aprender novas habilidades graças ao esforço necessário para construção desse projeto.
> “A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.”  
> — Albert Einstein