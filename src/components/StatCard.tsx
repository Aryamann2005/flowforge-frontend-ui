import type { LucideIcon } from "lucide-react";

export function StatCard({ label, value, change, icon: Icon, tone = "neutral" }: { label: string; value: string; change: string; icon: LucideIcon; tone?: string }) {
  return <article className="stat-card"><div className={`stat-card__icon stat-card__icon--${tone}`}><Icon size={18} /></div><div><p>{label}</p><strong>{value}</strong><small>{change}</small></div></article>;
}