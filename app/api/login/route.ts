import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  // Email might exist but password might not exist since user can create account through OAuth providers.
  if (!user || !user.password) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return NextResponse.json(
      { error: "Password is incorrect" },
      { status: 401 }
    );
  }

  return NextResponse.json(user, { status: 200 });
}
