"use server";
import { z } from "zod";

const schemaRegister = z.object({
  firstname: z.string().min(3).max(20, {
    message: "First name must be between 3 and 20 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
});

export async function registerAction(prevState: any, formData: FormData) {
  console.log("registerAction called");

  const signUpData = {
    firstname: formData.get("firstname"),
    email: formData.get("email"),
    password: formData.get("password"),
    cpassword: formData.get("cpassword"),
  };

  try {
    schemaRegister.parse(formData);
    // Form data is valid, submit or do further processing
    console.log("Form data is valid:", formData);
    if (signUpData.password === signUpData.cpassword) {
      console.log("Passwords match");
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Zod validation error occurred
      console.log("Validation errors:", error.errors);
      return { errors: error.errors };
    } else {
      // Some other error occurred
      console.error("Error:", error);
      return { errors: error };
    }
  }

  console.log("####################");
  console.log(signUpData);

  return {
    ...prevState,
    data: signUpData,
  };
}
