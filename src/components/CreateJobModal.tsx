import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { JobType } from "../data/demo";
import { Button } from "./Button";

export function CreateJobModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [type, setType] = useState<JobType>("GENERATE_REPORT");
  const [priority, setPriority] = useState(5);
  const [createdId, setCreatedId] = useState("");
  useEffect(() => { if (!open) setCreatedId(""); }, [open]);
  if (!open) return null;
  const create = () => setCreatedId(`job_${Math.random().toString(16).slice(2, 8)}`);
  return <div className="modal-layer" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="modal" role="dialog" aria-modal="true" aria-labelledby="create-job-title">
      <div className="modal__header"><div><p className="eyebrow">NEW WORKLOAD</p><h2 id="create-job-title">Create a job</h2></div><Button variant="icon" aria-label="Close" onClick={onClose}><X size={18} /></Button></div>
      {createdId ? <div className="success-state"><span className="success-state__icon"><CheckCircle2 size={28} /></span><h3>Job created successfully</h3><p>Your job is waiting for an available worker.</p><code>{createdId}</code><Button variant="primary" onClick={onClose}>Done</Button></div> : <div className="form-stack">
        <label className="field"><span>Job type</span><select value={type} onChange={(e) => setType(e.target.value as JobType)}><option>GENERATE_REPORT</option><option>SEND_EMAIL</option><option>PROCESS_DATA</option></select></label>
        <div className="field"><span>Priority <b>{priority}</b></span><input type="range" min="1" max="10" value={priority} onChange={(e) => setPriority(Number(e.target.value))} /><div className="range-labels"><small>Low</small><small>High</small></div></div>
        <div className="job-preview"><span>Job summary</span><strong>{type.replaceAll("_", " ")}</strong><small>Priority {priority} · Added to flowforge-jobs</small></div>
        <div className="modal__actions"><Button onClick={onClose}>Cancel</Button><Button variant="primary" onClick={create}>Create job</Button></div>
      </div>}
    </section>
  </div>;
}