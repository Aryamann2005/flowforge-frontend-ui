import { Link } from "@tanstack/react-router";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import type { Job } from "../data/demo";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";

export function JobTable({ items }: { items: Job[] }) {
  return <div className="table-wrap"><table className="job-table"><thead><tr><th>Job ID</th><th>Job type</th><th>Priority</th><th>Status</th><th>Created at</th><th><span className="sr-only">Actions</span></th></tr></thead>
    <tbody>{items.map((job) => <tr key={job.id}><td><Link to="/jobs/$jobId" params={{ jobId: job.id }} className="job-id"><span className="job-id__glyph">J</span>{job.id}</Link></td><td>{job.type.replaceAll("_", " ")}</td><td><span className={`priority priority--${job.priority >= 8 ? "high" : "normal"}`}>P{job.priority}</span></td><td><StatusBadge status={job.status} /></td><td className="table-muted">{job.createdAt}</td><td><div className="row-actions"><Button variant="icon" aria-label={`More actions for ${job.id}`}><MoreHorizontal size={17} /></Button><Link to="/jobs/$jobId" params={{ jobId: job.id }} aria-label={`View ${job.id}`}><ChevronRight size={17} /></Link></div></td></tr>)}</tbody>
  </table></div>;
}