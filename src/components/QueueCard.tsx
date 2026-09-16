import { Activity, Boxes, Gauge } from "lucide-react";
import { queue } from "../data/demo";
import { StatusBadge } from "./StatusBadge";

export function QueueCard() {
  return <article className="queue-card"><div className="queue-card__head"><span className="queue-icon"><Boxes size={21} /></span><div><p>PRIMARY QUEUE</p><h3>{queue.name}</h3></div><StatusBadge status={queue.health as "HEALTHY"} /></div><div className="queue-metrics"><div><span>Waiting</span><strong>{queue.waiting}</strong></div><div><span>Active</span><strong>{queue.active}</strong></div><div><span>Completed</span><strong>{queue.completed.toLocaleString()}</strong></div><div><span>Failed</span><strong>{queue.failed}</strong></div></div><div className="queue-card__foot"><span><Activity size={15} />Live processing</span><span><Gauge size={15} />{queue.throughput}</span></div></article>;
}