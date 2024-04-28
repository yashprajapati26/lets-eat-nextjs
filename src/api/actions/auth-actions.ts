"use server";
import { z } from "zod";

// const schemaRegister = z.object({
//   firstname: z.string().min(3).max(20, {
//     message: "First name must be between 3 and 20 characters",
//   }),
//   email: z.string().email({
//     message: "Please enter a valid email address",
//   }),
//   password: z.string().min(6).max(100, {
//     message: "Password must be between 6 and 100 characters",
//   }),
// });

export async function registerAction(prevState: any, formData: FormData) {
  console.log("registerAction called");

  const signUpData = {
    firstname: formData.get("firstname"),
    email: formData.get("email"),
    password: formData.get("password"),
    cpassword: formData.get("cpassword"),
  };

  console.log("####################");
  console.log(signUpData);

  return {
    ...prevState,
    data: signUpData,
  };
}
