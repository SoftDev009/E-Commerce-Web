import dotenv from "dotenv"
dotenv.config()

import Airtable from "airtable-node"

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table(process.env.AIRTABLE_TABLE)


exports.handler = async () => {
  try {
    const response = await airtable.list({ maxRecords: 100 })

    const products = response.records.map((product) => {
      const { id, fields } = product
      const {
        weight,
        price,
        most_popular,
        bestseller,
        material,
        stock,
        new_arrival,
        designer,
        company,
        hot_collection,
        colors,
        category,
        description,
        reviews,
        stars,
        name,
        notes,
        featured,
        sale,
        trending,
        shipping,
        origin,
        images,
        exclusive,
        new_in_market,
      } = fields
      const { url } = images[0]
      return {
        id,
        weight,
        price,
        most_popular,
        bestseller,
        material,
        stock,
        new_arrival,
        designer,
        company,
        hot_collection,
        colors,
        category,
        description,
        reviews,
        stars,
        name,
        notes,
        featured,
        sale,
        trending,
        shipping,
        origin,
        image: url,
        images,
        exclusive,
        new_in_market,
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: "There was an error",
    }
  }
}
