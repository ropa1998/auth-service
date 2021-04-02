import { UsersClient } from "../proto/users_grpc_pb";
import { credentials } from "grpc";

const port = 9090;

export const client = new UsersClient(
  `localhost:${port}`,
  credentials.createInsecure()
);
