import { Mic, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

export function VoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");
  const submit = () => { if (message.trim()) setMessage(""); };
  return <><Button variant="primary" className={`voice-fab ${listening ? "voice-fab--active" : ""}`} aria-label="Open FlowForge Assistant" onClick={() => setOpen(true)}><Mic size={20} /></Button>
    {open && <aside className="assistant-panel" aria-label="FlowForge Assistant"><div className="assistant__head"><span className="assistant__mark"><Sparkles size={17} /></span><div><strong>FlowForge Assistant</strong><small>{listening ? "Listening…" : "Ready"}</small></div><Button variant="icon" aria-label="Close assistant" onClick={() => { setOpen(false); setListening(false); }}><X size={17} /></Button></div>
      <div className="assistant__body"><div className="assistant__message"><p>What can I help you orchestrate?</p><small>Try a suggested command or speak naturally.</small></div><div className="suggestions">{["Create a high priority report job", "Show failed jobs", "How many jobs are running?"].map((text) => <button key={text} onClick={() => setMessage(text)}>{text}</button>)}</div></div>
      <div className="assistant__input"><Button variant={listening ? "primary" : "icon"} aria-label="Start voice input" onClick={() => setListening(!listening)}><Mic size={17} /></Button><input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && submit()} placeholder={listening ? "Listening…" : "Ask FlowForge…"} /><Button variant="icon" aria-label="Send" onClick={submit}><Send size={17} /></Button></div>
    </aside>}
  </>;
}