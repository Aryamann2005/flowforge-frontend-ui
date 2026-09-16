import { createFileRoute } from "@tanstack/react-router";
import { JobDetails } from "../components/JobDetails";
import { jobs } from "../data/demo";

export const Route = createFileRoute("/jobs/$jobId")({
  head: ({ params }) => ({ meta: [
    { title: `${params.jobId} — FlowForge` }, { name: "description", content: "FlowForge job execution details and lifecycle." },
    { property: "og:title", content: "Job details — FlowForge" }, { property: "og:description", content: "Inspect a FlowForge job execution and lifecycle." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: JobDetailPage,
});
function JobDetailPage() { const { jobId } = Route.useParams(); const job = jobs.find((item) => item.id === jobId) ?? jobs[0]; return job ? <JobDetails job={job} /> : null; }