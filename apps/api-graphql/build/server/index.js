"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataSources = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const apollo_server_1 = require("apollo-server");
const typeDefs_1 = __importDefault(require("../typeDefs"));
const resolvers_1 = __importDefault(require("../resolvers"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, MONGODB_URL } = process.env;
const initDataSources = ({ mongoose }) => __awaiter(void 0, void 0, void 0, function* () {
    if (mongoose) {
        yield (0, constant_definitions_1.initMongoose)(mongoose);
    }
});
exports.initDataSources = initDataSources;
const server = new apollo_server_1.ApolloServer({
    cors: true,
    resolvers: resolvers_1.default,
    typeDefs: typeDefs_1.default,
    context: (({ req }) => ({ req }))
});
server.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, exports.initDataSources)({ mongoose: {
            mongoUrl: MONGODB_URL
        } });
    console.log(`Server running at https://localhost:${PORT}`);
}));
