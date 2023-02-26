import { getAllStores, getStoreById } from "@partiaf/business-logic";

interface Uuid {
  uuid: string;
}

export default {
  Query: {
    async getAllStores() {
      const stores = await getAllStores();
      return stores;
    },
    async getStoreById(_: any, { uuid }: Uuid, context: any) {
      const store = await getStoreById(uuid);
      return store;
    },
  },
};
