import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  // minimal guard
  if (!data?.title || !data?.html) {
    return NextResponse.json(
      { error: "title and html required" },
      { status: 400 }
    );
  }
  const created = await prisma.item.create({ data });
  return NextResponse.json(created, { status: 201 });
}
