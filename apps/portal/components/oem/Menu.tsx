import { useEffect, useState, type ReactNode } from "react";
import {
  BarChart3,
  Boxes,
  Building2,
  Code2,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Menu,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

type OemMenuProps = {
  children: ReactNode;
  activeItem?: string;
  organizationName?: string;
  onLogout: () => void;
};

const items = [
  { id: "overview", label: "Overview", href: "/oem", icon: LayoutDashboard },
  { id: "devices", label: "Devices", href: "/oem/devices", icon: Smartphone },
  { id: "builds", label: "Build Policies", href: "/oem/build-policies", icon: Boxes },
  { id: "anchors", label: "Trust Anchors", href: "/oem/trust-anchors", icon: KeyRound },
  { id: "reports", label: "Reports", href: "/oem/reports", icon: BarChart3 },
  { id: "api", label: "API Access", href: "/oem/api-access", icon: Code2 },
  { id: "organization", label: "Organization", href: "/oem/organization", icon: Building2 },
];

export default function OemMenu({
  children,
  activeItem = "overview",
  organizationName = "OEM Portal",
  onLogout,
}: OemMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const sidebar = (
    <div className="flex h-full flex-col bg-[#071226] text-white">
      <div className="flex h-20 items-center gap-3 border-b border-white/10 px-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="font-semibold">Unified Attestation</p>
          <p className="text-xs text-slate-400">OEM Portal</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3" aria-label="OEM navigation">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeItem;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                active
                  ? "bg-[#1c3155] text-white shadow-sm"
                  : "text-slate-300 hover:bg-[#101f36] hover:text-white"
              }`}
            >
              <Icon size={20} className={active ? "text-blue-300" : "text-slate-400"} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
            <Building2 size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{organizationName}</p>
            <p className="text-xs text-slate-400">OEM Administrator</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onLogout}
          className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-[#101f36] hover:text-white"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 lg:block">{sidebar}</aside>

      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#071226] text-white">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#071226]">Unified Attestation</p>
            <p className="text-xs text-slate-500">OEM Portal</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          className="rounded-xl border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>
      </header>

      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#071226]/70 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[min(88vw,320px)] transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close navigation menu"
          className="absolute right-3 top-3 z-10 rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          <X size={21} />
        </button>
        {sidebar}
      </aside>

      <main className="min-w-0 lg:pl-72">
        <div className="mx-auto w-full max-w-[1600px] p-4 sm:p-5 lg:p-6">{children}</div>
      </main>
    </div>
  );
}
