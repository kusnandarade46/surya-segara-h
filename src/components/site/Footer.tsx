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
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center bg-brand text-brand-foreground font-mono text-[13px] font-bold">
                S
              </span>
              <span className="text-[15px] font-bold tracking-tight">SSH Company</span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              {t(
                "Mitra teknologi keselamatan industri terkemuka untuk operasi berisiko tinggi di sektor Minyak & Gas, Petrokimia, Pertambangan, dan Energi.",
                "The leading industrial safety technology partner for high-risk operations across Oil & Gas, Petrochemical, Mining, and Energy sectors.",
              )}
            </p>
            <div className="mt-6 space-y-1.5 font-mono text-[12px] text-ink-soft">
              <div>PT Surya Segara Hana</div>
              <div>Jakarta, Indonesia</div>
              <div>+62 21 0000 0000</div>
              <div>contact@sshcompany.co.id</div>
            </div>
          </div>

          <div className="grid gap-8 md:col-span-8 md:grid-cols-3">
            {col(t("Solusi", "Solutions"), [
              { to: "/solutions/h2s", label: t("Layanan H2S", "H2S Services") },
              { to: "/solutions/connected-safety", label: t("Connected Safety", "Connected Safety") },
              { to: "/solutions/emergency-response", label: t("Tanggap Darurat", "Emergency Response") },
              { to: "/solutions/gas-detection", label: t("Deteksi Gas", "Gas Detection") },
              { to: "/solutions/consulting", label: t("Konsultasi K3 Industri", "Industrial Safety Consulting") },
              { to: "/solutions/calibration-maintenance", label: t("Kalibrasi & Pemeliharaan", "Calibration & Maintenance Check") },
            ])}
            {col(t("Produk", "Products"), [
              { to: "/products/inet", label: "iNet®" },
              { to: "/products/safer-one", label: "SAFER One®" },
              { to: "/products/ventis-pro5", label: "Ventis Pro5" },
              { to: "/products/radius-bz1", label: "Radius BZ1" },
              { to: "/products/tango-tx1", label: "Tango TX1" },
              { to: "/products/mx6-ibrid", label: "MX6 iBrid" },
            ])}
            {col(t("Perusahaan", "Company"), [
              { to: "/about", label: t("Tentang Kami", "About Us") },
              { to: "/industries", label: t("Industri", "Industries") },
              { to: "/resources", label: t("Wawasan", "Insights") },
              { to: "/contact", label: t("Kontak", "Contact") },
            ])}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-ssh flex flex-col items-start justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft md:flex-row md:items-center">
          <div>© {year} PT Surya Segara Hana. {t("Hak cipta dilindungi.", "All rights reserved.")}</div>
          <div className="flex gap-6">
            <span>ISO 9001:2015</span>
            <span>OHSAS 18001</span>
            <span>K3 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
