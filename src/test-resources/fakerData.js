import faker from 'faker'
import {v4} from 'uuid'

function generateDataArray(length) {
  const dataArray = []

  for (let i = 0; i < length; i++) {
    const data = {
      id: i,
      project: faker.lorem.word(),
      username: faker.internet.userName(),
      // password: faker.internet.password(),
      password: "********",
      possessor: faker.name.findName(),
      token: v4()
    }
    dataArray.push(data)
  }
  return dataArray
}

export default generateDataArray
