import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrytjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    console.log(username, email, password);
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrytjs.genSalt(10);
    const hashedPassword = await bcrytjs.hash(password, salt);
    await User.create({ username, email, password: hashedPassword });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
