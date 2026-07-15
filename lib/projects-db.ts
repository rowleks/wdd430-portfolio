import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type: "school" | "opensource";
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id} LIMIT 1
  `;
  return rows[0] ?? null;
}
