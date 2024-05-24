// Depending on how complicated the resolver would become, I would likely split it into multiple files if needed.
const AWS = require("aws-sdk")
const docClient = new AWS.DynamoDB.DocumentClient()

exports.getStarship = async (event) => {
  if (!event.arguments || !event.arguments.id) {
    throw new Error("Missing required argument 'id'")
  }

  const { id } = event.arguments
  const params = {
    TableName: "Starships",
    Key: { id },
  }

  try {
    const data = await docClient.get(params).promise()
    if (!data.Item) {
      throw new Error(`Starship with id ${id} not found`)
    }
    return data.Item
  } catch (error) {
    console.error(`Failed to fetch starship with id ${id}:`, error)
    throw new Error(error.message || "Failed to fetch starship")
  }
}

exports.listStarships = async () => {
  const params = {
    TableName: "Starships",
  }

  try {
    const data = await docClient.scan(params).promise()
    return data.Items
  } catch (error) {
    console.error("Failed to fetch starships:", error)
    throw new Error(error.message || "Failed to fetch starships")
  }
}

exports.createStarship = async (event) => {
  const {
    id,
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  } = event.arguments

  const params = {
    TableName: "Starships",
    Item: {
      id,
      name,
      model,
      manufacturer,
      cost_in_credits,
      length,
      max_atmosphering_speed,
      crew,
      passengers,
      cargo_capacity,
      consumables,
      hyperdrive_rating,
      MGLT,
      starship_class,
    },
  }

  try {
    await docClient.put(params).promise()
    return params.Item
  } catch (error) {
    console.error("Failed to create starship:", error)
    throw new Error(error.message || "Failed to create starship")
  }
}
