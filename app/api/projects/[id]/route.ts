import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export const GET = async (_req: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }
  const project = getProjectById(numericId);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json(project);
};
