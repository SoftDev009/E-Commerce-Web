const dotenv = require("dotenv")
dotenv.config()

const Airtable = require("airtable-node")

const airtable = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_API_KEY })
  .base(import.meta.env.VITE_AIRTABLE_BASE)
  .table(import.meta.env.VITE_AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  try {
    const response = await airtable.list({ maxRecords: 200 })
    console.log("#######")
    console.log(response)
    console.log("#######")
    return {
      statusCode: 200,
      body: "products route",
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: "There was an error",
    }
  }
}
