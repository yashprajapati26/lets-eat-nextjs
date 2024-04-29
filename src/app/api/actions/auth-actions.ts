"use server";
import { z } from "zod";
import { users } from "../../../../public/users";

const schemaRegister = z.object({
  firstname: z.string().min(3).max(20, {
    message: "First name must be between 3 and 20 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(4).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
});

export async function registerAction(prevState: any, formData: FormData) {
  console.log("registerAction called",formData);

  const signUpData = {
    firstname: formData.get("firstname"),
    email: formData.get("email"),
    password: formData.get("password"),

  };

  try {
    schemaRegister.parse(signUpData);
    // Form data is valid, submit or do further processing
    console.log("Form data is valid:", formData);
    if (signUpData.password === formData.get("cpassword")) {
      const lastdata = users[users.length - 1]
      const data = {
        id : lastdata.id+1,
        name : signUpData.firstname,
        email : signUpData.email,
        password : signUpData.password
      }
      users.push(data)
      console.log("Passwords match", users);
    }
    return {
      ...prevState,
      data: signUpData,
    };
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
