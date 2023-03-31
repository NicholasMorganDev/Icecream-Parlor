import { client, icecreamCollection } from "../index.js";

const deleteItem = async () => {
  try {
    await client.connect();
    const itemDeleted = await icecreamCollection.deleteOne({name:"single scoop"});
    console.log(itemDeleted);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
};

deleteItem();