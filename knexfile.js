module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/resolutions1"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};