// Depending on how complicated the resolver would become, I would likely split it into multiple files if needed.

const AWS = require("aws-sdk")
const docClient = new AWS.DynamoDB.DocumentClient()

exports.getPerson = async (event) => {
  if (!event.arguments || !event.arguments.id) {
    throw new Error("Missing required argument 'id'")
  }

  const { id } = event.arguments
  const params = {
    TableName: "People",
    Key: { id },
  }

  try {
    const data = await docClient.get(params).promise()
    if (!data.Item) {
      throw new Error(`Person with id ${id} not found`)
    }
    return data.Item
  } catch (error) {
    console.error(`Failed to fetch person with id ${id}:`, error)
    throw new Error(error.message || "Failed to fetch person")
  }
}

exports.listPeople = async () => {
  const params = {
    TableName: "People",
  }

  try {
    const data = await docClient.scan(params).promise()
    return data.Items
  } catch (error) {
    console.error("Failed to fetch people:", error)
    throw new Error(error.message || "Failed to fetch people")
  }
}

exports.createPerson = async (event) => {
  const {
    id,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    species,
  } = event.arguments

  const params = {
    TableName: "People",
    Item: {
      id,
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      species,
    },
  }

  try {
    await docClient.put(params).promise()
    return params.Item
  } catch (error) {
    console.error("Failed to create person:", error)
    throw new Error(error.message || "Failed to create person")
  }
}
