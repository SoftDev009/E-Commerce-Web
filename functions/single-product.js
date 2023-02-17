import dotenv from "dotenv"
dotenv.config()

import Airtable from "airtable-node"


const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters
  if (id) {
    try {
      let product = await airtable.retrieve(id)
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      product = { id: product.id, ...product.fields }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: `Server Error`,
      }
    }
  }
  return {
    statusCode: 400,
    body: "Please provide product id",
  }
}
