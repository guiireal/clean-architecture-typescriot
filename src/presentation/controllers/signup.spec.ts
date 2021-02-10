import { SignUpController } from "./signup";

describe("SignUp Controller", () => {
  test("should return 400 if no name is provider", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "foo@example",
        password: "password",
        passwordConfirmation: "password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
