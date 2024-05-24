// Depending on how complicated the resolver would become, I would likely split it into multiple files if needed.

const AWS = require("aws-sdk")
const docClient = new AWS.DynamoDB.DocumentClient()

exports.getFilm = async (event) => {
  if (!event.arguments || !event.arguments.id) {
    throw new Error("Missing required argument 'id'")
  }

  const { id } = event.arguments
  const params = {
    TableName: "Films",
    Key: { id },
  }

  try {
    const data = await docClient.get(params).promise()
    if (!data.Item) {
      throw new Error(`Film with id ${id} not found`)
    }
    return data.Item
  } catch (error) {
    console.error(`Failed to fetch film with id ${id}:`, error)
    throw new Error(error.message || "Failed to fetch film")
  }
}

exports.listFilms = async () => {
  const params = {
    TableName: "Films",
  }

  try {
    const data = await docClient.scan(params).promise()
    return data.Items
  } catch (error) {
    console.error("Failed to fetch films:", error)
    throw new Error(error.message || "Failed to fetch films")
  }
}

exports.createFilm = async (event) => {
  const {
    id,
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
  } = event.arguments

  const params = {
    TableName: "Films",
    Item: {
      id,
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    },
  }

  try {
    await docClient.put(params).promise()
    return params.Item
  } catch (error) {
    console.error("Failed to create film:", error)
    throw new Error(error.message || "Failed to create film")
  }
}
