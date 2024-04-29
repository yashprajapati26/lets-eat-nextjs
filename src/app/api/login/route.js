import { users } from "../../../../public/users";

export async function POST(req) {
  const logindata = await req.json();
  const user = users.find(
    (user) =>
      user.email === logindata.username && user.password === logindata.password
  );

  if (user) {
    return new Response(
      JSON.stringify({ status: 200, message: "Login successful." })
    );
  } else {
    return new Response(
      JSON.stringify({
        status: 400,
        message: "Not login, Credential wrong.",
      })
    );
  }
}
