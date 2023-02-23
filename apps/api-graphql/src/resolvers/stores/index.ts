import { getAllStores, getStoreById } from "@partiaf/business-logic";

interface Uuid {
  uuid: string;
}

export default {
  Query: {
    async getAllStores() {
      const stores = await getAllStores();
      console.log({ stores });
      return stores;
    },
    async getStoreById(_: any, { uuid }: Uuid, context: any) {
      console.log("FUNC");
      console.log({ uuid });
      const store = await getStoreById(uuid);
      console.log({ store });
      return store;
    },
  },
};
