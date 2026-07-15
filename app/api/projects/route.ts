import { type NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const type = searchParams.get("type");
  const projects = await getProjects(type);

  return NextResponse.json(projects);
};
