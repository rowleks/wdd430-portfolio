import { db } from "./db";

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  type: string;
};

export interface ProjectFilters {
  search?: string | null;
  type?: string | null;
  page?: number;
  limit?: number;
}

export async function getProjects(filters?: ProjectFilters): Promise<Project[]> {
  const { search, type, page = 1, limit = 6 } = filters ?? {};

  return db.project.findMany({
    where: {
      ...(type ? { type } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { id: "asc" },
    skip: (page - 1) * limit,
    take: limit,
  });
}

export async function getProjectsCount(filters?: Pick<ProjectFilters, "search" | "type">): Promise<number> {
  const { search, type } = filters ?? {};

  return db.project.count({
    where: {
      ...(type ? { type } : {}),
      ...(search
        ? {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { technologies: { hasSome: [search] } },
            ],
          }
        : {}),
    },
  });
}

export async function getProjectById(id: number): Promise<Project | null> {
  return db.project.findUnique({ where: { id } });
}
