import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

function generateBearerToken() {
  return crypto.randomBytes(20).toString("hex");
}

export async function POST(request: Request) {
  const data = await request.json();
  let email = data.email;
  let code = data.code;

  let token = generateBearerToken();
  const cookieStore = cookies();
  cookieStore.set("userToken", token);
  return NextResponse.json({
    message: "Success! Signed in.",
    token,
    user: {
      _id: "64f968507572b4f2fbe27250",
      email,
      code,
      expireDate: "Thu Sep 14 2028 03:00:00 GMT+0300(GMT+03:00)",
      role: "user",
      createdAt: "2023-09-07T06:06:08.331Z",
      updatedAt: "2023-09-07T06:06:08.331Z",
      __v: 0,
    },
  });
}
