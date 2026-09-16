import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../components/Button";
import { JobTable } from "../components/JobTable";
import { jobs } from "../data/demo";

export const Route = createFileRoute("/jobs")({
  head: () => ({ meta: [
    { title: "Jobs — FlowForge" }, { name: "description", content: "Search, filter, sort, and inspect all FlowForge jobs." },
    { property: "og:title", content: "Jobs — FlowForge" }, { property: "og:description", content: "Search, filter, sort, and inspect orchestration jobs." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: JobsPage,
});

function JobsPage() {
  const [query, setQuery] = useState(""); const [status, setStatus] = useState("ALL"); const [type, setType] = useState("ALL"); const [sort, setSort] = useState("DATE");
  const filtered = useMemo(() => jobs.filter((job) => job.id.includes(query.toLowerCase()) && (status === "ALL" || job.status === status) && (type === "ALL" || job.type === type)).sort((a,b) => sort === "PRIORITY" ? b.priority-a.priority : 0), [query,status,type,sort]);
  return <div className="page-stack"><section className="page-intro"><div><p className="eyebrow">JOB MANAGEMENT</p><h2>All jobs</h2><p>Inspect and manage every workload across your queues.</p></div><span className="result-count">{filtered.length} jobs</span></section>
    <section className="panel panel--table"><div className="filters"><label className="filter-search"><Search size={16}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by job ID" /></label><select value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Filter by status"><option value="ALL">All statuses</option><option>WAITING</option><option>ACTIVE</option><option>COMPLETED</option><option>FAILED</option><option>DELAYED</option></select><select value={type} onChange={(e) => setType(e.target.value)} aria-label="Filter by job type"><option value="ALL">All job types</option><option>GENERATE_REPORT</option><option>SEND_EMAIL</option><option>PROCESS_DATA</option></select><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort jobs"><option value="DATE">Newest first</option><option value="PRIORITY">Highest priority</option></select></div><JobTable items={filtered} /><div className="pagination"><span>Showing 1–{filtered.length} of {filtered.length}</span><div><Button variant="icon" disabled><ChevronLeft size={17}/></Button><button className="page-number">1</button><Button variant="icon" disabled><ChevronRight size={17}/></Button></div></div></section>
  </div>;
}