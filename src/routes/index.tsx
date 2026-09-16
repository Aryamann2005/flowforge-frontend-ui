import { createFileRoute } from "@tanstack/react-router";
import { Activity, CheckCircle2, CircleDashed, ListTodo, XCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnalyticsChart } from "../components/AnalyticsChart";
import { JobTable } from "../components/JobTable";
import { StatCard } from "../components/StatCard";
import { VoiceAssistant } from "../components/VoiceAssistant";
import { activityData, jobs } from "../data/demo";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Dashboard — FlowForge" },
    { name: "description", content: "Live overview of FlowForge jobs, execution activity, and queue health." },
    { property: "og:title", content: "FlowForge Dashboard" },
    { property: "og:description", content: "Live overview of jobs, execution activity, and queue health." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <div className="page-stack">
      <section className="page-intro"><div><p className="eyebrow">LIVE OVERVIEW</p><h2>System overview</h2><p>Monitor throughput, job states, and worker activity in real time.</p></div><div className="system-live"><span />All systems operational</div></section>
      <section className="stats-grid">
        <StatCard label="Total jobs" value="4,892" change="+12.4% this week" icon={ListTodo} />
        <StatCard label="Active jobs" value="10" change="Across 4 workers" icon={Activity} tone="blue" />
        <StatCard label="Waiting jobs" value="12" change="Avg. wait 4.2s" icon={CircleDashed} tone="amber" />
        <StatCard label="Completed" value="4,821" change="98.5% success rate" icon={CheckCircle2} tone="green" />
        <StatCard label="Failed jobs" value="59" change="1.2% of total" icon={XCircle} tone="red" />
      </section>
      <section className="panel"><div className="section-heading"><div><p className="eyebrow">LAST 24 HOURS</p><h2>Job activity</h2></div><div className="legend"><span><i className="legend__completed" />Completed</span><span><i className="legend__failed" />Failed</span></div></div><AnalyticsChart data={activityData} /></section>
      <section className="panel panel--table"><div className="section-heading"><div><p className="eyebrow">LATEST ACTIVITY</p><h2>Recent jobs</h2></div><Link to="/jobs" className="text-link">View all jobs →</Link></div><JobTable items={jobs.slice(0, 6)} /></section>
      <VoiceAssistant />
    </div>
  );
}
