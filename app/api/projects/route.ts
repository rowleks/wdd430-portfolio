import { type NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/projects-db";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const search = searchParams.get("q");
  const type = searchParams.get("type");
  const page = Number(searchParams.get("page")) || 1;

  const projects = await getProjects({ search, type, page });

  return NextResponse.json(projects);
};
