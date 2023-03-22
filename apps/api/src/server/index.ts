import "dotenv/config";
import fastifyCors from "@fastify/cors";
import fastify, { FastifyInstance } from "fastify";
import { registerRoutes } from "../routes";
import { initMongoose } from "@partiaf/constant-definitions";
import { Server } from "socket.io";

const { PORT } = process.env;
const corsOptions = {
  origin: "*",
};
export interface InitMongooseOptions {
  mongoUrl: string;
}

export interface InitDataSourcesOptions {
  mongoose: InitMongooseOptions;
}

export const initDataSources = async ({ mongoose }: InitDataSourcesOptions) => {
  if (mongoose) {
    await initMongoose(mongoose);
  }
};

const main = async () => {
  const server: FastifyInstance = fastify({ logger: true });
  server.register(fastifyCors, corsOptions);

  const io = new Server(server.server);

  io.on("connection", (socket) => {
    console.log(socket.id);
    server.log.info("Connecting to server");
  });

  await initDataSources({
    mongoose: {
      mongoUrl: process.env.MONGODB_URL as string,
    },
  });

  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v3" }
  );

  await server.listen({ port: Number(PORT), host: "0.0.0.0" }, () => {
    server.log.info(`Backend App is running at http://localhost:${PORT}`);
    server.log.info("Press CTRL-c to stop");
  });
};

void main();
