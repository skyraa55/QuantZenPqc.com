# QuantZen Backend

Node.js + Express + MongoDB (Mongoose) API that stores:
- Contact page form submissions (`ContactMessage`)
- Newsletter subscriptions (`Subscriber`)

## Where to put this folder

Place `backend/` as a **sibling** of your `quantzen-react` folder, not inside it:

```
your-project-root/
├── quantzen-react/   <- your existing frontend
└── backend/          <- this folder
```

## Setup

```bash
cd backend
npm install
cp .env.example .env
# edit .env and set your MONGO_URI (local Mongo or MongoDB Atlas)
npm run dev
```

Server starts on `http://localhost:5000` by default.

## Endpoints

| Method | Route              | Purpose                          |
|--------|---------------------|-----------------------------------|
| GET    | `/api/health`       | Health check                     |
| POST   | `/api/contact`      | Save a contact form submission   |
| GET    | `/api/contact`      | List all contact submissions     |
| POST   | `/api/newsletter`   | Subscribe an email                |
| GET    | `/api/newsletter`   | List all subscribers             |

### POST /api/contact body

```json
{
  "organization": "Acme Bank",
  "email": "you@acme.com",
  "interest": "A pilot program",
  "context": "We want to protect our payment gateway."
}
```

### POST /api/newsletter body

```json
{ "email": "you@acme.com" }
```

## MongoDB options

- **Local**: install MongoDB Community Server, run `mongod`, use
  `mongodb://127.0.0.1:27017/quantzen` as `MONGO_URI`.
- **Atlas (cloud, free tier)**: create a cluster at mongodb.com/atlas,
  create a database user, whitelist your IP, and copy the connection
  string into `MONGO_URI`.
