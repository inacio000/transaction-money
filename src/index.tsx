import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from "miragejs";
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website Freelancer",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2023-04-21 20:02:10"),
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "Home",
          amount: 10000,
          createdAt: new Date("2023-04-21 10:02:10"),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
