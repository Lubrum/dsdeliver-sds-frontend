# Projeto Frontend

Este é o frontend do sistema de encomendas e entrega de pedidos feito com ReactJS. 

Tecnologias utilizadas:

- ReactJS;
- Netlify cli;

# Pré-requisitos

- netlify-cli

```bash
sudo npm install netlify-cli -g
```

# Execução

Pré-requisito: arquivo .env na raíz do projeto com as seguintes variáveis de ambiente:

- REACT_APP_ACCESS_TOKEN_MAP_BOX: token para acesso à api do [Map Box](https://www.mapbox.com/) para o mapa da aplicação. É necessário criar um token no Map Box;

- REACT_APP_API_URL: url do backend deste serviço. [Pode ser acessado neste link](https://github.com/Lubrum/dsdeliver-sds-backend/tree/main);

- REACT_APP_API_PRODUCTS_URL: path da api de obtenção da lista de produtos. No caso, é /products;

- REACT_APP_API_ORDERS_URL: path api de geração de pedidos de produtos. No caso, é /orders;

```bash 
npm run netlify:start
```

# Deploy no Netlify

O deploy do frontend é feito a cada push feito no github automaticamente.

As variáveis de ambiente deste serviço são cadastradas diretamente nas configurações do site no Netlify. Não é utilizado o arquivo .env em produção.

[Tutorial passo a passo do deploy no Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

Live link: https://sds2-delivery-food.netlify.app