import { client, icecreamCollection } from '../index.js'

const editIcecream = async () => {
try {
    await client.connect()
    const editedIcecream = await icecreamCollection.findOneAndUpdate({name: 'single scoop'},{$set: {name: 'Singular Scoop'}});
    console.log(editedIcecream)
} catch (error) {
    console.log(error)
} finally {
    await client.close()
}
}

editIcecream()
