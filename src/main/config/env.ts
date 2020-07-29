export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.SECRET || 'u7G6A0=8cpQ6'
}
