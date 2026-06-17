import { useLang } from "@/i18n";

export function WhatsAppButton() {
  const { t } = useLang();
  const msg = encodeURIComponent(
    t(
      "Halo SSH, saya ingin berdiskusi terkait solusi keselamatan industri.",
      "Hello SSH, I would like to discuss industrial safety solutions.",
    ),
  );
  return (
    <a
      href={`https://wa.me/6281200000000?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] transition-transform hover:translate-y-[-2px]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M19.11 4.91A10.05 10.05 0 0 0 12.05 2C6.55 2 2.1 6.45 2.1 11.95c0 1.76.46 3.48 1.34 5L2 22l5.21-1.37a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.95-4.45 9.95-9.95 0-2.66-1.04-5.16-2.9-7.0ZM12.06 20.18a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.23 8.23 0 1 1 15.27-4.39 8.18 8.18 0 0 1-8.31 8.24Zm4.52-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.56.13-.17.25-.65.8-.79.97-.15.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.39-1.72c-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.17 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.3Z" />
      </svg>
      WhatsApp
    </a>
  );
}
