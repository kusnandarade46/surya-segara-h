import { createFileRoute } from "@tanstack/react-router";
import { Eye, Flag, Handshake, Lightbulb, ShieldCheck, Sparkles, Target } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, SectionHeader } from "@/components/site/ui";
import controlImg from "@/assets/about-controlroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang PT Trakindo Utama — Dealer Resmi Caterpillar Indonesia" },
      {
        name: "description",
        content:
          "Profil PT Trakindo Utama, penyedia alat berat Caterpillar resmi sejak 1970 di Indonesia. Visi, misi, nilai inti, dan kepemimpinan.",
      },
      { property: "og:title", content: "Tentang Trakindo Utama" },
      {
        property: "og:description",
        content: "Dealer resmi Caterpillar terpercaya di Indonesia selama lebih dari 50 tahun.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();

  const values = [
    {
      icon: Handshake,
      k: t("Integritas", "Integrity"),
      d: t(
        "Mengutamakan kejujuran, etika bisnis tinggi, dan transparansi dalam setiap hubungan kemitraan.",
        "Prioritizing honesty, high business ethics, and transparency in every partnership relationship.",
      ),
    },
    {
      icon: ShieldCheck,
      k: t("Keselamatan", "Safety"),
      d: t(
        "Menjamin keselamatan kerja nol kecelakaan (zero harm) bagi karyawan, pelanggan, dan mitra di lapangan.",
        "Guaranteeing zero-accident K3 work safety for employees, customers, and partners in the field.",
      ),
    },
    {
      icon: Lightbulb,
      k: t("Pengembangan", "Continuous Growth"),
      d: t(
        "Senantiasa berinovasi meningkatkan kompetensi SDM dan integrasi teknologi digital terbaru.",
        "Constantly innovating to improve human resources competency and integrate the latest digital technologies.",
      ),
    },
    {
      icon: Sparkles,
      k: t("Keunggulan", "Excellence"),
      d: t(
        "Berkomitmen memberikan standar kualitas servis dan suku cadang asli terbaik demi kepuasan pelanggan.",
        "Committed to delivering the highest quality standards of service and original parts for customer satisfaction.",
      ),
    },
    {
      icon: Target,
      k: t("Kerjasama", "Teamwork"),
      d: t(
        "Membangun kolaborasi erat lintas tim dan kemitraan jangka panjang yang saling menguntungkan.",
        "Building close collaboration across teams and mutually beneficial long-term partnerships.",
      ),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("TENTANG TRAKINDO UTAMA", "ABOUT TRAKINDO UTAMA")}
        title={t(
          "Lebih dari setengah abad memajukan industri dan infrastruktur Indonesia.",
          "Over half a century advancing Indonesia's industries and infrastructure.",
        )}
        intro={t(
          "PT Trakindo Utama adalah dealer resmi Caterpillar di Indonesia, didirikan pada tahun 1970. Kami menyediakan solusi alat berat, generator set, suku cadang asli, dan layanan purnajual komprehensif bagi industri pertambangan, konstruksi, perkebunan, dan energi.",
          "PT Trakindo Utama is the authorized Caterpillar dealer in Indonesia, founded in 1970. We deliver comprehensive heavy equipment solutions, gensets, genuine parts, and product support for mining, construction, agriculture, and energy sectors.",
        )}
      />

      {/* Overview + image */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh grid gap-12 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={controlImg}
                alt="Trakindo monitoring room"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>01 — {t("SEJARAH KAMI", "OUR HISTORY")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t(
                "Didirikan pada tahun 1970. Melayani dengan dedikasi di seluruh Indonesia.",
                "Founded in 1970. Serving with dedication across the Indonesian archipelago.",
              )}
            </h2>
            <div className="mt-7 space-y-4 text-[16px] leading-relaxed text-ink-soft">
              <p>
                {t(
                  "Trakindo Utama didirikan oleh A.H. Hamami pada tanggal 23 Desember 1970. Pada tahun 1971, kami secara resmi ditunjuk menjadi dealer tunggal Caterpillar di Indonesia. Perjalanan kami dibangun di atas integritas, komitmen tinggi untuk kemajuan industri, dan dedikasi mendukung infrastruktur nasional.",
                  "Trakindo Utama was founded by A.H. Hamami on December 23, 1970. In 1971, we were officially appointed as the sole Caterpillar dealer in Indonesia. Our journey is built on integrity, high commitment to industrial advancement, and dedication to supporting national infrastructure.",
                )}
              </p>
              <p>
                {t(
                  "Hari ini, dengan didukung oleh lebih dari 60 cabang dan pusat servis dari Sumatra hingga Papua, kami siap menjamin kelancaran operasional alat berat Cat Anda dengan ketersediaan mekanik ahli dan suku cadang asli Cat Parts.",
                  "Today, supported by more than 60 branches and service centers spanning from Sumatra to Papua, we guarantee the smooth operation of your Cat equipment with expert technicians and genuine Cat Parts availability.",
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-px bg-line py-0 md:grid-cols-2">
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                02 — {t("VISI", "VISION")}
              </span>
            </div>
            <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-secondary">
              {t(
                "Menjadi penyedia solusi kelas dunia untuk peralatan Caterpillar di Indonesia.",
                "To be a world-class solution provider for Caterpillar equipment in Indonesia.",
              )}
            </h2>
          </div>
          <div className="bg-background p-10 md:p-16">
            <div className="flex items-center gap-3">
              <Flag className="h-6 w-6 text-brand" strokeWidth={1.5} />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                03 — {t("MISI", "MISSION")}
              </span>
            </div>
            <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-secondary">
              {t(
                "Mendirikan perusahaan yang mampu menciptakan lapangan kerja berkualitas, melayani purnajual prima, dan memberikan nilai tambah luar biasa bagi stakeholders.",
                "To establish a company that creates high-quality employment, delivers excellent product support, and creates outstanding value for stakeholders.",
              )}
            </h2>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-surface">
        <div className="container-ssh py-24 md:py-32">
          <SectionHeader
            index="04 — CORE VALUES"
            eyebrow={t("NILAI-NILAI INTI", "CORE VALUES")}
            title={t(
              "Prinsip Utama yang Menjadi Pondasi Bisnis Kami.",
              "Core Principles That Outline Our Business Foundation.",
            )}
          />
          <div className="mt-14 grid gap-px bg-line md:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, k, d }) => (
              <div key={k} className="bg-surface p-8">
                <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
                <h3 className="mt-6 text-[18px] font-bold tracking-[-0.01em] text-secondary">
                  {k}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications + Partners */}
      <section className="border-b border-line bg-secondary text-surface">
        <div className="container-ssh grid gap-14 py-24 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>05 — {t("SERTIFIKASI & STANDARDISASI", "CERTIFICATIONS & STANDARDS")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em]">
              {t(
                "Komitmen terhadap Kualitas, Keselamatan, & Lingkungan.",
                "Commitment to Quality, Safety, & Environment.",
              )}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-surface/70">
              {t(
                "Seluruh jaringan operasional Trakindo diaudit secara berkala untuk mematuhi standar internasional manajemen mutu, keselamatan K3, dan pengelolaan lingkungan hijau.",
                "Trakindo's entire operational network is audited periodically to comply with international standards in quality, occupational health and safety, and environmental management.",
              )}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px bg-surface/10 sm:grid-cols-3">
              {[
                "ISO 9001:2015",
                "ISO 14001:2015",
                "ISO 45001:2018",
                "CATERPILLAR 5-STAR SERVICE",
                "K3 KEMNAKER RI",
                "PROPER HIJAU",
                "ISO 37001:2016",
                "OHSAS 18001",
                "TÜV RHEINLAND",
              ].map((c) => (
                <div
                  key={c}
                  className="bg-secondary p-6 text-center font-mono text-[12px] uppercase tracking-[0.16em] text-surface/80 flex items-center justify-center"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
