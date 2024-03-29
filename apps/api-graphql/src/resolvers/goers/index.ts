import {
  createGoer,
  getGoersByUser,
  updateGoer,
} from "@partiaf/business-logic";

interface Uuid {
  uuid: string;
}

export default {
  Query: {
    async getMyTikets(_: any, { uuid }: Uuid, context: any) {
      const tickets = await getGoersByUser(uuid);
      return tickets;
    },
  },

  Mutation: {
    async createGoer(_: any, { data }: any, context: any) {
      console.log(data);
      const goer = await createGoer(data);
      return goer;
    },
    async updateGoer(_: any, { uuid, data }: any, context: any) {
      const goer = await updateGoer(uuid, data);
      return goer;
    },
  },
};
