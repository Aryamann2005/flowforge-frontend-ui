import type { JobType } from "../data/demo";

const API_BASE_URL = import.meta.env["VITE_API_BASE_URL"] ?? "http://localhost:5000/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!response.ok) throw new Error(`FlowForge API request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export const jobsApi = {
  list: () => request("/jobs"),
  get: (id: string) => request(`/jobs/${encodeURIComponent(id)}`),
  create: (input: { type: JobType; priority: number }) =>
    request("/jobs", { method: "POST", body: JSON.stringify(input) }),
};