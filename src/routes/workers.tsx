import { createFileRoute } from "@tanstack/react-router";
import { Activity, Cpu, Gauge } from "lucide-react";
import { StatCard } from "../components/StatCard";
import { WorkerCard } from "../components/WorkerCard";
import { workers } from "../data/demo";

export const Route = createFileRoute("/workers")({ head: () => ({ meta: [
  { title: "Workers — FlowForge" }, { name: "description", content: "Monitor FlowForge worker availability, throughput, and health." }, { property: "og:title", content: "Workers — FlowForge" }, { property: "og:description", content: "Monitor worker availability, throughput, and health." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: WorkersPage });
function WorkersPage() { return <div className="page-stack"><section className="page-intro"><div><p className="eyebrow">EXECUTION FLEET</p><h2>Workers</h2><p>Track availability and throughput across every processing region.</p></div><div className="system-live"><span />3 of 4 healthy</div></section><section className="stats-grid stats-grid--three"><StatCard label="Total workers" value="4" change="3 online" icon={Cpu}/><StatCard label="Active jobs" value="10" change="75% utilization" icon={Activity} tone="blue"/><StatCard label="Combined rate" value="81.5/min" change="+8.1% vs yesterday" icon={Gauge} tone="green"/></section><section className="worker-grid">{workers.map((worker) => <WorkerCard key={worker.id} worker={worker as Parameters<typeof WorkerCard>[0]["worker"]}/>)}</section></div>; }