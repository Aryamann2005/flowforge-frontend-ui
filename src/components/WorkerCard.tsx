import { Cpu, Gauge, TimerReset } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

export function WorkerCard({ worker }: { worker: { id: string; region: string; status: "ONLINE" | "DEGRADED"; active: number; completed: number; failed: number; rate: string; heartbeat: string } }) {
  return <article className="worker-card"><div className="worker-card__head"><span className="worker-icon"><Cpu size={19} /></span><div><h3>{worker.id}</h3><p>{worker.region}</p></div><StatusBadge status={worker.status} /></div><div className="worker-stats"><div><small>Active</small><strong>{worker.active}</strong></div><div><small>Completed</small><strong>{worker.completed.toLocaleString()}</strong></div><div><small>Failed</small><strong>{worker.failed}</strong></div></div><div className="worker-card__foot"><span><Gauge size={14} />{worker.rate}</span><span><TimerReset size={14} />{worker.heartbeat}</span></div></article>;
}