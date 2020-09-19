import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 0,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: 'smartfarm'
})

const db = mongoose.connection

export default db