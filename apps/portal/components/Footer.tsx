type FooterProps = {
  pushToBottom?: boolean;
};

export default function Footer({ pushToBottom = true }: FooterProps) {
  return (
    <footer
      className={[
        "flex flex-col gap-2 border-t border-slate-200 px-1 pb-1 pt-4 text-xs text-slate-500",
        "md:flex-row md:items-center md:justify-between",
        pushToBottom ? "mt-auto" : "",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center gap-x-2">
        <span>© {new Date().getFullYear()} Unified Attestation. All rights reserved.</span>
        <span>
          Designed and developed by{" "}
          <a
            href="https://dorsavalli.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-700 transition hover:text-blue-900 hover:underline"
          >
            Dorsa Vali
          </a>
        </span>
      </div>
      <nav className="flex items-center gap-6" aria-label="Legal links">
        <a href="https://uattest.net/" className="transition hover:text-slate-900">
          More Info
        </a>
        <a href="/terms" className="transition hover:text-slate-900">
          Terms of Service
        </a>
      </nav>
    </footer>
  );
}
