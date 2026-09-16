import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, BarChart3, Boxes, ChevronLeft, LayoutDashboard, ListTodo, Settings, Users } from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/jobs", label: "Jobs", icon: ListTodo },
  { to: "/workers", label: "Workers", icon: Users },
  { to: "/queues", label: "Queues", icon: Boxes },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <>
    {open && <button aria-label="Close navigation" className="sidebar-backdrop" onClick={onClose} />}
    <aside className={`sidebar ${open ? "sidebar--open" : ""}`}>
      <div className="brand"><span className="brand__mark"><Activity size={18} /></span><span>FlowForge</span></div>
      <nav className="nav-list" aria-label="Main navigation">
        {links.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return <Link key={to} to={to} onClick={onClose} className={`nav-link ${active ? "nav-link--active" : ""}`}><Icon size={17} /><span>{label}</span></Link>;
        })}
      </nav>
      <div className="sidebar__footer">
        <div className="connection"><span className="connection__dot" /><span>API connected</span><span className="connection__latency">24ms</span></div>
        <div className="profile"><span className="avatar">AT</span><span className="profile__copy"><strong>Aryamann</strong><small>Developer</small></span><ChevronLeft size={16} /></div>
      </div>
    </aside>
  </>;
}