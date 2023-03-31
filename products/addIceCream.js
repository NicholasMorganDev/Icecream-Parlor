import { client, icecreamCollection } from '../index.js'

const product1 = {
  name: 'single scoop',
  price: 75.99,
  flavor: 'Vanilla',
  description: 'singular scoop of creamy rich italian icecream',
}
const product2 = {
  name: 'Double Scoop',
  flavor: 'Chocolate',
  price: 8.50,
}
const product3 = {
  name: 'Waffle Cone',
  flavor: 'Cookie Dough',
  price: 8.52,
}
const product4 = {
  name: 'Sundae',
  flavor: 'Strawberry',
  price: 10.05,
}
const product5 = {
  name: 'Banana Split',
  flavor: 'Banana',
  price: 11.45,
}


const addIcecream = async () => {
try {
  await client.connect()
  const addedIcecream = await icecreamCollection.insertOne(product1);
  console.log(addedIcecream);
} catch (error) {
  console.log(error) 
} finally {
  await client.close()
}
}

addIcecream()