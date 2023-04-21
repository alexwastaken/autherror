import { currentUser } from "@clerk/nextjs/app-beta"
import { NextResponse } from "next/server";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json('not logged in')
  } else {
    return NextResponse.json('logged in')
  }
}