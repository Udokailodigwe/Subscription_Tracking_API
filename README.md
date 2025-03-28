<div align="center">
  <br />
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
    <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgreSQL" />
    <img src="https://img.shields.io/badge/Upstash-08E066?style=for-the-badge&logo=upstash&logoColor=white" alt="upstash" />
    <img src="https://img.shields.io/badge/Nodemailer-346F98?style=for-the-badge&logo=nodemailer&logoColor=white" alt="nodemailer" />
    <img src="https://img.shields.io/badge/Hostinger_VPS-673DE6?style=for-the-badge&logo=hostinger&logoColor=white" alt="hostinger VPS" />
    <img src="https://img.shields.io/badge/Arcjet-000000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imhttp://www.w3.org/2000/svgIj48cGF0aCBkPSJNMzMgMThDMzMgMjUuNzI4IDI3LjczIDMyIDIxIDEySDFWMTBDNy4yNzIgMTAgMTMgMTUuMjcgMTMgMjFDMTMgMjYuNzMgNy4yNzIgMzIgMSAzMkgxMUMxNy43MjggMzIgMjMgMjYuNzMgMjMgMjFDMjMgMTUuMjcgMTcuNzMgMTAgMTEgMTBIMzdWMTBaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==&logoColor=white" alt="arcjet" />
    
  </div>

  <h3 align="center">A Subscription Tracking API</h3>
</div>

A **production-ready Subscription Management System API** that handles **real users, real money, and real business logic**.

Authenticated with JWTs, created models and schemas for optimal DB queries, and can be integrated with ODMs and ORMs transaction format. Modularly Structured the architecture layers, to accommodate scalability and seamless communication with the frontend. Tripple layered security for preventing SQL injections, BOT shielding and Rate Limiting was achieved with the aid of **ARCJET**. Subscriptions tracking, renewal, cancellation and reminders workflow was implemented with the aid of **UPSTASH** a serverless data platform that automates API management and scaling, email reminders are automatically sent to user and this feature was done with **NODEMAILER**. Deployed with **Hostinger VPS**.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Express.js
- MongoDB
- PostgreSQL

## <a name="features">🔋 Features</a>

👉 **Implemented advanced Rate Limiting and Bot Protection**: with Arcjet that helped secure the whole app.

👉 **Database was Modeled**: both ODM and ORM data transaction format was implemented. MongoDB/Mongoose, Upstash/Redis, Postgres all where combine to optimally ensure high performance between network requests and response. e.g. via indexing, Sharding etc.

👉 **JWT Authentication**: authenticated and authorized user resources on a Role Based Access Control Model.

👉 **Global Error Handling**: Input validation, middleware integration and proper error logging.

👉 **Logging Mechanisms**: For better debugging and monitoring.

👉 **Email Reminders**: Automated smart email reminders with workflows using Upstash and Nodemailer.

👉 **Code Architecture and Reusability**: Automated smart email reminders with workflows using Upstash and Nodemailer.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Dummy JSON Data</code></summary>

```json
{
  "name": "Udoka Wear Ltd",
  "price": 139.0,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

</details>

## <a name="links">🔗 Links</a>

- **Arcjet** - [https://launch.arcjet.com/4g2R2e4](https://launch.arcjet.com/4g2R2e4)
- **Upstash** - [https://bit.ly/42ealiN](https://bit.ly/42ealiN)
- **Hostinger** - [https://www.hostinger.com/](https://www.hostinger.com/)
- **Nodemailer** - [https://www.nodemailer.com/](https://www.nodemailer.com/)
