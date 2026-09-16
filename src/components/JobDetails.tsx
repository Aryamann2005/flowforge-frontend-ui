import { AlertTriangle, ArrowLeft, Clock3, Copy, RotateCcw } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Job } from "../data/demo";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";

export function JobDetails({ job }: { job: Job }) {
  const steps = job.status === "FAILED" ? ["WAITING", "ACTIVE", "FAILED"] : ["WAITING", "ACTIVE", "COMPLETED"];
  return <div className="detail-page"><Link to="/jobs" className="back-link"><ArrowLeft size={16} />Back to jobs</Link><section className="detail-header"><div><div className="detail-id"><h2>{job.id}</h2><Button variant="icon" aria-label="Copy job ID" onClick={() => navigator.clipboard?.writeText(job.id)}><Copy size={15} /></Button></div><p>{job.type.replaceAll("_", " ")}</p></div><div className="detail-header__actions">{job.status === "FAILED" && <Button><RotateCcw size={16} />Retry job</Button>}<StatusBadge status={job.status} /></div></section>
    <section className="panel lifecycle-panel"><div className="section-heading"><div><p className="eyebrow">EXECUTION PATH</p><h2>Job lifecycle</h2></div><span className="live-time"><Clock3 size={14} />Updated just now</span></div><div className="lifecycle">{steps.map((step, index) => <div className={`lifecycle__step ${step === job.status ? "lifecycle__step--current" : "lifecycle__step--done"}`} key={step}><span>{index + 1}</span><div><strong>{step}</strong><small>{index === 0 ? job.createdAt : index === 1 ? job.startedAt ?? "Pending" : job.completedAt ?? "Just now"}</small></div>{index < steps.length - 1 && <i />}</div>)}</div></section>
    <div className="detail-grid"><section className="panel"><div className="section-heading"><h2>Job information</h2></div><dl className="detail-list"><div><dt>Job ID</dt><dd><code>{job.id}</code></dd></div><div><dt>Job type</dt><dd>{job.type}</dd></div><div><dt>Priority</dt><dd>P{job.priority}</dd></div><div><dt>Retry attempts</dt><dd>{job.attempts} / 3</dd></div></dl></section><section className="panel"><div className="section-heading"><h2>Timing</h2></div><dl className="detail-list"><div><dt>Created</dt><dd>{job.createdAt}</dd></div><div><dt>Started</dt><dd>{job.startedAt ?? "Not started"}</dd></div><div><dt>Completed</dt><dd>{job.completedAt ?? "Not completed"}</dd></div><div><dt>Duration</dt><dd>{job.duration}</dd></div></dl></section></div>
    {job.error && <section className="error-panel"><AlertTriangle size={18} /><div><strong>Execution failed</strong><code>{job.error}</code></div></section>}
  </div>;
}