import { ServerUnaryCall, sendUnaryData, ServiceError } from "grpc";

import { Empty } from "google-protobuf/google/protobuf/empty_pb";

import { IUsersServer } from "../proto/users_grpc_pb";
import { LoginRequest } from "../proto/users_pb";
import { users } from "./db";

export class UsersServer implements IUsersServer {
  authenticate(
    call: ServerUnaryCall<LoginRequest>,
    callback: sendUnaryData<Empty>
  ) {
    const email = call.request.getEmail();
    const password = call.request.getPassword();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      const error: ServiceError = {
        name: "Invalid credentials",
        message: `Invalid email or password.`,
      };
      callback(error, null);
      return;
    }

    callback(null, new Empty());
  }
}
