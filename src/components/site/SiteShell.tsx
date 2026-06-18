import type { ReactNode } from "react";
import { LangProvider } from "@/i18n";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { StickyCTASidebar } from "./StickyCTASidebar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <div className="flex min-h-screen flex-col bg-background pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCTASidebar />
      </div>
    </LangProvider>
  );
}
