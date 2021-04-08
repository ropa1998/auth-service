import { Server, ServerCredentials } from "grpc";
import { UsersService } from "../proto/users_grpc_pb";
import { UsersServer } from "./services";

const server = new Server();
server.addService(UsersService, new UsersServer());

const port = 9090;
const uri = `0.0.0.0:${port}`;
console.log(`😀 Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();
