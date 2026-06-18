import { useState } from "react";
import { Phone, MapPin, MessageSquareMore, FileText, X, Send } from "lucide-react";
import { useLang } from "@/i18n";
import { LeadForm } from "./LeadForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function StickyCTASidebar() {
  const { t } = useLang();
  const [showChat, setShowChat] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>(
    [
      {
        sender: "bot",
        text: "Halo! Ada yang bisa kami bantu hari ini? Tanyakan tentang alat berat Cat, rental, atau suku cadang.",
      },
    ],
  );
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const userText = inputText;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputText("");

    setTimeout(() => {
      let reply =
        "Terima kasih atas pesan Anda. Spesialis sales kami akan segera menghubungi Anda melalui WhatsApp.";
      if (userText.toLowerCase().includes("sewa") || userText.toLowerCase().includes("rental")) {
        reply =
          "Untuk layanan sewa cepat (Cat Rental Store), silakan ajukan kuotasi melalui form Request Quote atau hubungi Call Center di 1500-228.";
      } else if (
        userText.toLowerCase().includes("spare") ||
        userText.toLowerCase().includes("suku cadang") ||
        userText.toLowerCase().includes("parts")
      ) {
        reply =
          "Suku cadang resmi dapat dibeli langsung melalui parts.cat.com. Butuh bantuan nomor part? Sales officer kami akan menghubungi Anda.";
      }
      setChatMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 1000);
  };

  const locations = [
    {
      name: "Kantor Pusat Jakarta",
      address: "Gedung Trakindo Utama, Jl. Raya Cilandak KKO No. 1, Jakarta",
    },
    { name: "Cabang Surabaya", address: "Jl. Rungkut Industri III No. 58, Surabaya" },
    { name: "Cabang Balikpapan", address: "Jl. Jenderal Sudirman No. 27, Balikpapan" },
    { name: "Cabang Pekanbaru", address: "Jl. Soekarno Hatta Km. 8.5, Pekanbaru" },
    { name: "Cabang Makassar", address: "Jl. Urip Sumoharjo Km. 15, Makassar" },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR: Fixed to right margin */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 sm:flex">
        {/* Request Quote Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="group flex h-14 w-14 items-center justify-center bg-brand text-brand-foreground transition-all duration-300 hover:w-44 hover:justify-start hover:px-5 cursor-pointer">
              <FileText className="h-5 w-5 flex-shrink-0" />
              <span className="max-w-0 overflow-hidden font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs whitespace-nowrap">
                {t("Minta Penawaran", "Request Quote")}
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {t("Formulir Penawaran Digital", "Digital Quote Request")}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2">
              <LeadForm variant="consultation" />
            </div>
          </DialogContent>
        </Dialog>

        {/* Find Location Trigger */}
        <button
          onClick={() => setShowLocation(true)}
          className="group flex h-14 w-14 items-center justify-center bg-secondary text-surface transition-all duration-300 hover:w-44 hover:justify-start hover:px-5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
        >
          <MapPin className="h-5 w-5 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs whitespace-nowrap">
            {t("Cari Lokasi", "Find Location")}
          </span>
        </button>

        {/* Live Chat Trigger */}
        <button
          onClick={() => setShowChat(true)}
          className="group flex h-14 w-14 items-center justify-center bg-secondary text-surface transition-all duration-300 hover:w-44 hover:justify-start hover:px-5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
        >
          <MessageSquareMore className="h-5 w-5 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs whitespace-nowrap">
            {t("Live Chat", "Live Chat")}
          </span>
        </button>

        {/* Call Center */}
        <a
          href="tel:+62217822373"
          className="group flex h-14 w-14 items-center justify-center bg-secondary text-surface transition-all duration-300 hover:w-44 hover:justify-start hover:px-5 hover:bg-brand hover:text-brand-foreground cursor-pointer"
        >
          <Phone className="h-5 w-5 flex-shrink-0" />
          <span className="max-w-0 overflow-hidden font-mono text-[12px] font-bold uppercase tracking-wider transition-all duration-300 group-hover:ml-3 group-hover:max-w-xs whitespace-nowrap">
            {t("Hubungi Kami", "Call Center")}
          </span>
        </a>
      </div>

      {/* MOBILE STICKY BOTTOM BAR: Fixed to bottom of screen */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex h-16 border-t border-line bg-surface sm:hidden shadow-lg">
        {/* Request Quote Button */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex flex-1 flex-col items-center justify-center gap-1 text-ink-soft active:text-brand cursor-pointer">
              <FileText className="h-5 w-5" />
              <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
                Quote
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-lg overflow-y-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                {t("Formulir Penawaran", "Quote Form")}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-2">
              <LeadForm variant="consultation" />
            </div>
          </DialogContent>
        </Dialog>

        {/* Location Button */}
        <button
          onClick={() => setShowLocation(true)}
          className="flex flex-1 flex-col items-center justify-center gap-1 text-ink-soft active:text-brand cursor-pointer"
        >
          <MapPin className="h-5 w-5" />
          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
            Location
          </span>
        </button>

        {/* Live Chat Button */}
        <button
          onClick={() => setShowChat(true)}
          className="flex flex-1 flex-col items-center justify-center gap-1 text-ink-soft active:text-brand cursor-pointer"
        >
          <MessageSquareMore className="h-5 w-5" />
          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Chat</span>
        </button>

        {/* Call Center Button */}
        <a
          href="tel:+62217822373"
          className="flex flex-1 flex-col items-center justify-center gap-1 text-ink-soft active:text-brand cursor-pointer"
        >
          <Phone className="h-5 w-5" />
          <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">Call</span>
        </a>
      </div>

      {/* MODAL WINDOW: Live Chat Box (Fixed bottom-right popup) */}
      {showChat && (
        <div className="fixed bottom-20 right-4 z-50 flex h-96 w-80 flex-col border border-line bg-surface shadow-2xl transition-all duration-300 md:bottom-6 md:right-20">
          <div className="flex items-center justify-between bg-secondary p-4 text-surface">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[12px] font-bold uppercase tracking-wider">
                Trakindo Live Support
              </span>
            </div>
            <button onClick={() => setShowChat(false)} className="hover:text-brand cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded p-2.5 text-[13px] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-brand text-brand-foreground font-medium"
                      : "bg-muted text-ink"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex border-t border-line p-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t("Ketik pesan Anda...", "Type your message...")}
              className="flex-1 bg-transparent px-3 py-2 text-[14px] outline-none"
            />
            <button
              type="submit"
              className="grid h-10 w-10 place-items-center bg-brand text-brand-foreground hover:bg-brand/90 transition-colors cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* MODAL WINDOW: Location List */}
      {showLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/40 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md border border-line bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="font-mono text-[14px] font-bold uppercase tracking-wider">
                {t("Jaringan Dealer Trakindo", "Trakindo Dealership Network")}
              </h3>
              <button
                onClick={() => setShowLocation(false)}
                className="text-ink-soft hover:text-brand cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 max-h-60 overflow-y-auto divide-y divide-line">
              {locations.map((loc) => (
                <div key={loc.name} className="py-3">
                  <h4 className="text-[14px] font-bold text-ink">{loc.name}</h4>
                  <p className="mt-1 text-[12px] text-ink-soft">{loc.address}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowLocation(false)}
              className="mt-6 w-full bg-secondary py-3 text-center font-mono text-[12px] font-bold uppercase tracking-wider text-surface hover:bg-brand hover:text-brand-foreground transition-all cursor-pointer"
            >
              {t("Tutup", "Close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
