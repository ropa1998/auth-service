import authenticateUser from "./authenticate";

async function run() {
  console.log("A valid user");
  const response1 = await authenticateUser("test@mail.com", "12345678");
  console.log(response1);

  console.log("An invalid user");
  const response2 = await authenticateUser("test@mail.com", "invalid_password");
  console.log(response2);
}

run();
