import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const extractTokenData = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const tokenData = (await jwt.verify(token, process.env.JWT_SECRET!)) as {
      id: string;
      email: string;
    } | null;
    return tokenData;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
