import type { JobStatus } from "../data/demo";

export function StatusBadge({ status }: { status: JobStatus | "ONLINE" | "DEGRADED" | "HEALTHY" }) {
  return <span className={`status status--${status.toLowerCase()}`}><span className="status__dot" />{status}</span>;
}