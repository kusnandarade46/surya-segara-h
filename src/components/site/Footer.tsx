import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const col = (heading: string, items: { to: string; label: string }[]) => (
    <div>
      <h4 className="eyebrow mb-4 text-ink-soft">{heading}</h4>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.to + i.label}>
            <Link to={i.to} className="text-[14px] text-ink hover-underline">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-ssh py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-12 place-items-center bg-brand text-brand-foreground font-mono text-[14px] font-black tracking-tighter transform skew-x-[-6deg]">
                CAT
              </span>
              <span className="text-[16px] font-extrabold tracking-tight">PT Trakindo Utama</span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              {t(
                "Dealer resmi Caterpillar di Indonesia, menghadirkan solusi alat berat kelas dunia, opsi rental terpercaya, suku cadang asli, dan layanan pemeliharaan ahli sejak 1970.",
                "The authorized Caterpillar dealer in Indonesia, delivering world-class heavy equipment solutions, reliable rental options, original parts, and expert maintenance support since 1970.",
              )}
            </p>
            <div className="mt-6 space-y-1.5 font-mono text-[12px] text-ink-soft">
              <div>Gedung Trakindo Utama</div>
              <div>Jl. Raya Cilandak KKO No. 1, Jakarta 12560</div>
              <div>+62 21 782 2373</div>
              <div>info@trakindo.co.id</div>
            </div>
          </div>

          <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
            {col(t("Layanan & Solusi", "Services & Solutions"), [
              { to: "/solutions/rental", label: t("Cat Rental Store", "Cat Rental Store") },
              {
                to: "/solutions/parts",
                label: t("Cat Parts (parts.cat.com)", "Cat Parts (parts.cat.com)"),
              },
              {
                to: "/solutions/services",
                label: t("Layanan Pemeliharaan", "Maintenance Services"),
              },
              {
                to: "/solutions/financing",
                label: t("Skema Pembiayaan & Promo", "Financing & Promos"),
              },
            ])}
            {col(t("Kategori Alat Berat", "Equipment Categories"), [
              { to: "/products?cat=Excavator", label: t("Excavator", "Excavator") },
              { to: "/products?cat=Grader", label: t("Motor Grader", "Motor Grader") },
              { to: "/products?cat=Genset", label: t("Generator Set", "Generator Set") },
            ])}
            {col(t("Perusahaan", "Company"), [
              { to: "/about", label: t("Tentang Trakindo", "About Trakindo") },
              { to: "/industries", label: t("Aplikasi Industri", "Industrial Applications") },
              { to: "/contact", label: t("Hubungi Kami", "Contact Us") },
            ])}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-ssh flex flex-col items-start justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft md:flex-row md:items-center">
          <div>
            © {year} PT Trakindo Utama. {t("Hak cipta dilindungi.", "All rights reserved.")}
          </div>
          <div className="flex gap-6">
            <span>ISO 9001:2015</span>
            <span>ISO 14001:2015</span>
            <span>ISO 45001:2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
