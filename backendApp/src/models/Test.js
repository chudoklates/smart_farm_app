import mongoose from 'mongoose'

const Schema = mongoose.Schema

const testSchema = new Schema({
  testString: String,
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
})

const Test = mongoose.model(
  'Test',
  testSchema
)
export default Test
