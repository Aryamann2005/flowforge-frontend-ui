import { createFileRoute } from "@tanstack/react-router";
import { QueueCard } from "../components/QueueCard";
import { AnalyticsChart } from "../components/AnalyticsChart";
import { activityData } from "../data/demo";
export const Route = createFileRoute("/queues")({ head: () => ({ meta: [
  { title: "Queues — FlowForge" }, { name: "description", content: "Monitor queue depth, throughput, and processing health in FlowForge." }, { property: "og:title", content: "Queues — FlowForge" }, { property: "og:description", content: "Monitor queue depth, throughput, and processing health." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: QueuesPage });
function QueuesPage() { return <div className="page-stack"><section className="page-intro"><div><p className="eyebrow">BULLMQ QUEUES</p><h2>Queues</h2><p>Watch queue depth, throughput, and delivery health.</p></div></section><QueueCard/><section className="panel"><div className="section-heading"><div><p className="eyebrow">THROUGHPUT</p><h2>Queue activity</h2></div><span className="result-count">24 hours</span></div><AnalyticsChart data={activityData}/></section></div>; }