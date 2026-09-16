import { Bell, Menu, Plus, Search } from "lucide-react";
import { Button } from "./Button";

export function Navbar({ title, onMenu, onCreate }: { title: string; onMenu: () => void; onCreate: () => void }) {
  return <header className="topbar">
    <div className="topbar__left"><Button variant="icon" className="mobile-menu" aria-label="Open navigation" onClick={onMenu}><Menu size={19} /></Button><h1>{title}</h1></div>
    <div className="topbar__actions">
      <label className="global-search"><Search size={16} /><input aria-label="Global search" placeholder="Search jobs..." /><kbd>⌘ K</kbd></label>
      <Button variant="icon" aria-label="Notifications"><Bell size={18} /><span className="notification-dot" /></Button>
      <Button variant="primary" className="create-button" onClick={onCreate}><Plus size={17} />Create job</Button>
      <span className="avatar topbar__avatar">AT</span>
    </div>
  </header>;
}