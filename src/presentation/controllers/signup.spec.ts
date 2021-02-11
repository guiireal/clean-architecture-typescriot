import { SignUpController } from "./signup";
import { MissingParamError } from "../errors/missing-param-error";

describe("SignUp Controller", () => {
  test("Should return 400 if no name is provider", () => {
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
    expect(httpResponse.body).toEqual(new MissingParamError("name"));
  });

  test("Should return 400 if no email is provider", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        password: "password",
        passwordConfirmation: "password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("email"));
  });

  test("Should return 400 if no password is provider", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "fop@example.com",
        passwordConfirmation: "password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new MissingParamError("password"));
  });

  test("Should return 400 if no password confirmation is provider", () => {
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "fop@example.com",
        password: "password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(
      new MissingParamError("passWordConfirmation")
    );
  });
});
