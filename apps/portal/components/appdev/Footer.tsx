export default function AppdevFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-3 border-t border-slate-200 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Unified Attestation. All rights reserved.</p>
      <div className="flex gap-5">
        <a href="/privacy" className="hover:text-[#071226]">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-[#071226]">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
