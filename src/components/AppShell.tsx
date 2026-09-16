import { useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { CreateJobModal } from "./CreateJobModal";

const titles: Record<string, string> = { "/": "Dashboard", "/jobs": "Jobs", "/workers": "Workers", "/queues": "Queues", "/analytics": "Analytics", "/settings": "Settings" };

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [navOpen, setNavOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const title = pathname.startsWith("/jobs/") ? "Job details" : titles[pathname] ?? "FlowForge";
  return <div className="app-shell">
    <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />
    <div className="app-frame">
      <Navbar title={title} onMenu={() => setNavOpen(true)} onCreate={() => setCreateOpen(true)} />
      <main className="page-content">{children}</main>
    </div>
    <CreateJobModal open={createOpen} onClose={() => setCreateOpen(false)} />
  </div>;
}