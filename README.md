# Books GraphQL API

A backend API built with Node.js, Express, and GraphQL to retrieve book information through GraphQL queries.

## Features

- Fetch a list of books.
- Retrieve book details such as title, author, and publication year.
- Explore and test queries using the GraphiQL interface.
- Serve data through a GraphQL API endpoint.

## Tech Stack

- Node.js
- Express.js
- GraphQL
- JavaScript

## Project Structure

```text
graphql-api/
├── server.js
├── resolvers.js
├── schema.graphql
├── package.json
├── package-lock.json
└── .gitignore
```

## Installation and Setup

1. Clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Open the GraphiQL interface:

   http://localhost:9000/graphql

## Sample Query

```graphql
query {
  books {
    id
    title
    author
    publishedYear
  }
}
```

## Purpose

This project demonstrates the basics of building a GraphQL API using Node.js and Express, including schema definition, resolvers, and querying structured data.
