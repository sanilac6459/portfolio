import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// A small hidden terminal. Click the ❯_ button (or press "/") to open it,
// then type a command to jump around the page.

const LINKS = {
  email: "mailto:sanilachowdhury@gmail.com",
  github: "https://github.com/sanilac6459",
  linkedin: "https://www.linkedin.com/in/sanilachowdhury/",
};

// "open <name>" asks preview or GitHub, then opens it in a new tab
type ProjectLinks = { preview?: string; github?: string };
const PROJECT_LINKS: Record<string, ProjectLinks> = {
  "cuny-marketplace": { github: "https://github.com/farmiha/cuny-marketplace" },
  hunterconnect: {
    preview: "https://hunter-connect-psi.vercel.app/",
    github: "https://github.com/sanilac6459/hunter-connect",
  },
  phil: {
    preview:
      "https://drive.google.com/file/d/1NNQAlaI6GqRZ3moRA5YVlMKBbLKKBzz-/view?usp=sharing",
    github: "https://github.com/sanilac6459/job-agent",
  },
  styleme: {
    preview:
      "https://drive.google.com/file/d/1Hox0GU5vjn6Zmxep-Tz5oX5rOxcfNtbc/view?usp=sharing",
    github: "https://github.com/weijiej2964/Fashion-Project",
  },
  "python-code-evaluator": {
    github: "https://github.com/sanilac6459/pythonic-code-evaluator",
  },
  "winter-wordleland": {
    preview:
      "https://drive.google.com/file/d/1nA2Tjaf9ZgVG9kCAeBXm-5qcnNyu-R-J/view?usp=sharing",
    github: "https://github.com/TheSimmer101/wordle",
  },
  "gimmie-candy": {
    preview: "https://caipan.itch.io/gimme-candy",
    github: "https://github.com/weijiej2964/GIMMECANDY_Halloween",
  },
  keysanity: {
    preview: "https://sanilac6459.github.io/sep11-freedom-project/intro/",
    github: "https://github.com/sanilac6459/sep11-freedom-project",
  },
};

const SECTIONS = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];
const CHIPS = ["help", "projects", "experience", "contact", "ride"];

const term = {
  bg: "#170d13",
  bar: "#21121b",
  fg: "#f4e6ec",
  dim: "#a88d99",
  path: "#f5a3b8",
  arrow: "#ff6b95",
  green: "#7ee0a8",
  yellow: "#f2c94c",
};

type Line = { id: number; node: React.ReactNode };

const Hl = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "var(--rose)" }}>{children}</span>
);

const ExtLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target={href.startsWith("mailto:") ? undefined : "_blank"}
    rel="noopener noreferrer"
    className="underline underline-offset-2 hover:opacity-80"
    style={{ color: term.path }}
  >
    {children}
  </a>
);

const CommandBar = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [histIndex, setHistIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  // the project waiting for a P / G answer
  const pendingRef = useRef<string | null>(null);

  const say = (node: React.ReactNode) =>
    setLines((prev) => [...prev, { id: idRef.current++, node }]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Open a project's preview or GitHub in a new tab
  const openProject = (key: string, kind: "preview" | "github") => {
    const url = PROJECT_LINKS[key][kind];
    pendingRef.current = null;
    if (!url) return;
    say(
      <span style={{ color: term.green }}>
        → opening {key} {kind === "preview" ? "preview" : "on GitHub"}
      </span>,
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const Choice = ({
    k,
    kind,
    label,
  }: {
    k: string;
    kind: "preview" | "github";
    label: string;
  }) => (
    <button
      onClick={() => {
        say(
          <>
            <span style={{ color: term.arrow }}>❯</span>{" "}
            {label[0].toLowerCase()}
          </>,
        );
        openProject(k, kind);
        inputRef.current?.focus();
      }}
      className="px-1.5 rounded hover:opacity-80"
      style={{ color: term.path, border: "1px solid var(--line)" }}
    >
      {label}
    </button>
  );

  const run = (raw: string) => {
    const text = raw.trim();
    if (!text) return;

    setHistory((h) => [text, ...h].slice(0, 20));
    setHistIndex(-1);

    // Echo what was typed
    say(
      <>
        <span style={{ color: term.arrow }}>❯</span> {text}
      </>,
    );

    // Answering "P or G?" for a project
    const waiting = pendingRef.current;
    if (waiting) {
      const a = text.toLowerCase();
      if (a === "p" || a === "preview") return openProject(waiting, "preview");
      if (a === "g" || a === "github") return openProject(waiting, "github");
      pendingRef.current = null; // anything else: treat it as a new command
    }

    // Accept "cd about", "cat about.md", "./contact.sh" and plain "about"
    const cmd = text
      .toLowerCase()
      .replace(/^(cd|cat|\.\/)\s*/, "")
      .replace(/(\.md|\.log|\.sh|\/)$/, "");

    if (cmd === "help") {
      say(
        <>
          try: <Hl>about</Hl> · <Hl>experience</Hl> · <Hl>skills</Hl> ·{" "}
          <Hl>projects</Hl> · <Hl>contact</Hl> · <Hl>open hunterconnect</Hl> ·{" "}
          <Hl>ride</Hl> · <Hl>clear</Hl>
        </>,
      );
      return;
    }

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "exp") return run("experience");

    if (SECTIONS.includes(cmd)) {
      goTo(cmd);
      say(<span style={{ color: term.dim }}>→ jumping to {cmd}</span>);
      return;
    }

    if (cmd === "whoami") {
      say("Sanila Chowdhury · CS @ Hunter · SWE + data · NYC");
      return;
    }

    if (cmd === "ls") {
      say("about.md  experience.log  skills/  projects/  contact.sh");
      return;
    }

    if (cmd === "email" || cmd === "github" || cmd === "linkedin") {
      say(
        <>
          → <ExtLink href={LINKS[cmd]}>{cmd}</ExtLink>
        </>,
      );
      return;
    }

    if (cmd.startsWith("open ")) {
      const q = cmd.slice(5).trim().replace(/\s+/g, "-");
      const key = Object.keys(PROJECT_LINKS).find(
        (k) => k.includes(q) || q.includes(k),
      );
      if (key) {
        const links = PROJECT_LINKS[key];
        if (links.preview && links.github) {
          pendingRef.current = key;
          say(
            <>
              {key}: <Choice k={key} kind="preview" label="P preview" /> or{" "}
              <Choice k={key} kind="github" label="G github" />
            </>,
          );
        } else {
          // only one link, so just open it
          openProject(key, links.preview ? "preview" : "github");
        }
      } else {
        say(
          <span style={{ color: term.yellow }}>
            no project matching "{q}" · try "projects"
          </span>,
        );
      }
      return;
    }

    // The subway game: "ride", "train" or "subway"
    if (
      ["ride", "train", "subway", "s train", "ride the s line"].includes(cmd)
    ) {
      say(
        <span style={{ color: term.green }}>
          → boarding the S train… stand clear of the closing doors ♡
        </span>,
      );
      setTimeout(
        () => (window.location.href = "/ride-the-s-line/index.html"),
        900,
      );
      return;
    }

    if (cmd === "sudo hire sanila") {
      say(
        <span style={{ color: term.green }}>
          ✓ permission granted. opening contact…
        </span>,
      );
      setTimeout(() => goTo("contact"), 400);
      return;
    }

    say(
      <span style={{ color: term.yellow }}>
        command not found: {cmd} · type <Hl>help</Hl>
      </span>,
    );
  };

  // "/" opens it from anywhere, Esc closes it
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toUpperCase();
      const typing = tag === "INPUT" || tag === "TEXTAREA";
      if (e.key === "/" && !typing) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus the input when opened; greet once
  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 50);
    if (lines.length === 0) {
      say(
        <span style={{ color: term.dim }}>
          hi! type <Hl>help</Hl> or click a command below ♡
        </span>,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Keep the newest line in view
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [lines]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const next = Math.min(histIndex + 1, history.length - 1);
      setHistIndex(next);
      setInput(history[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = histIndex - 1;
      setHistIndex(next);
      setInput(next >= 0 ? history[next] : "");
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 font-mono-ui">
      {/* Terminal window */}
      {open && (
        <div
          role="dialog"
          aria-label="Command line"
          className="w-[min(380px,calc(100vw-40px))] rounded-[14px] overflow-hidden"
          style={{
            background: term.bg,
            border: "1px solid var(--line-strong)",
            boxShadow:
              "0 30px 70px -20px rgba(0, 0, 0, 0.8), 0 0 40px -20px var(--rose-glow)",
            animation: "cmdIn 0.2s ease",
          }}
        >
          <style>{`@keyframes cmdIn { from { opacity: 0; transform: translateY(8px) scale(.98); } }`}</style>

          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-3.5 py-2.5"
            style={{
              background: term.bar,
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span
              className="flex-1 text-center text-xs"
              style={{ color: term.dim }}
            >
              ~/sanila
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close command line"
              className="hover:opacity-80"
              style={{ color: term.dim }}
            >
              <X size={15} />
            </button>
          </div>

          {/* Output */}
          <div
            ref={logRef}
            aria-live="polite"
            className="max-h-[220px] overflow-y-auto px-4 pt-3 pb-1 text-[13px] leading-relaxed grid gap-1"
            style={{ color: term.fg }}
          >
            {lines.map((l) => (
              <p key={l.id} className="break-words">
                {l.node}
              </p>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-2.5 text-[13.5px]">
            <span style={{ color: term.path }}>~</span>
            <span className="font-bold" style={{ color: term.arrow }}>
              ❯
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              aria-label="Type a command"
              placeholder="type a command…"
              className="flex-1 bg-transparent outline-none placeholder:opacity-50"
              style={{ color: term.fg, caretColor: "var(--rose)" }}
            />
          </div>

          {/* Shortcuts */}
          <div className="flex flex-wrap gap-1.5 px-4 pb-3.5">
            {CHIPS.map((c) => (
              <button
                key={c}
                onClick={() => run(c)}
                className="text-xs px-2 py-1 rounded-md transition-colors hover:border-[color:var(--rose)]"
                style={{
                  color: term.path,
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close command line" : "Open command line"}
        aria-expanded={open}
        title="Command line ( / )"
        className="w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-bold transition-transform hover:scale-110"
        style={{
          background: "var(--rose-btn)",
          color: "#fff",
          boxShadow: "0 12px 30px -10px var(--rose-glow)",
        }}
      >
        {open ? <X size={18} /> : "❯_"}
      </button>
    </div>
  );
};

export default CommandBar;
