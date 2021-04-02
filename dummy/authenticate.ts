import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { LoginRequest } from "../proto/users_pb";
import { client } from "./utils";

export default function authenticateUser(email: string, passsword: string) {
  return new Promise<Empty>((resolve, reject) => {
    const request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(passsword);

    client.authenticate(request, (err, response) => {
      if (err) {
        reject(err);
      } else resolve(response);
    });
  });
}
