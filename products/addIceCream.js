import { client, icecreamCollection } from '../index.js'

const product1 = {
  name: 'single scoop',
  price: 75.99,
  flavor: 'Vanilla',
  description: 'singular scoop of creamy rich italian icecream',
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