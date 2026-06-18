import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { PageHero } from "@/components/site/ui";
import oilgasImg from "@/assets/industry-oilgas.jpg";
import petroImg from "@/assets/industry-petrochemical.jpg";
import refineryImg from "@/assets/industry-refinery.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import powerImg from "@/assets/industry-power.jpg";

export const INDUSTRIES = [
  {
    slug: "mining",
    idName: "Pertambangan",
    enName: "Mining",
    img: miningImg,
    idDesc:
      "Solusi armada dump truck raksasa, excavator tambang, dan grader untuk uptime maksimal 24/7 di site.",
    enDesc:
      "Solutions for mining trucks, large excavators, and graders to maximize 24/7 site uptime.",
  },
  {
    slug: "construction",
    idName: "Konstruksi",
    enName: "Construction",
    img: refineryImg,
    idDesc:
      "Peralatan serbaguna dari mini excavator hingga roller jalan untuk menyelesaikan proyek infrastruktur tepat waktu.",
    enDesc:
      "Versatile equipment from mini excavators to road rollers to complete infrastructure projects on schedule.",
  },
  {
    slug: "forestry-agriculture",
    idName: "Kehutanan & Perkebunan",
    enName: "Forestry & Agriculture",
    img: petroImg,
    idDesc:
      "Traktor penarik, ekskavator pembersih lahan, dan generator andal untuk mendukung mekanisasi pertanian.",
    enDesc:
      "Tractors, land preparation excavators, and reliable generators to support agricultural mechanization.",
  },
  {
    slug: "power-generation",
    idName: "Pembangkit Listrik",
    enName: "Power Generation",
    img: powerImg,
    idDesc:
      "Genset diesel dan gas Caterpillar sebagai solusi daya mandiri utama maupun cadangan kritis industri.",
    enDesc:
      "Caterpillar diesel and gas gensets providing prime energy and critical standby power solutions.",
  },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Aplikasi Industri Alat Berat Cat — Trakindo Utama" },
      {
        name: "description",
        content:
          "Solusi Caterpillar untuk sektor Pertambangan, Konstruksi, Kehutanan/Perkebunan, dan Pembangkit Listrik di Indonesia.",
      },
      { property: "og:title", content: "Aplikasi Industri — Trakindo Utama" },
      {
        property: "og:description",
        content: "Solusi alat berat Caterpillar lintas industri di Indonesia.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("INDUSTRI KAMI", "OUR INDUSTRIES")}
        title={t(
          "Solusi alat berat handal untuk sektor industri strategis.",
          "Reliable equipment solutions for strategic industrial sectors.",
        )}
        intro={t(
          "Setiap sektor industri memiliki tantangan operasional dan standar efisiensi yang unik. Trakindo merancang solusi armada Caterpillar terintegrasi untuk mendongkrak profitabilitas bisnis Anda.",
          "Each industrial sector faces unique operational challenges and efficiency standards. Trakindo designs integrated Caterpillar fleet solutions to boost your business profitability.",
        )}
      />

      <section className="bg-background">
        <div className="container-ssh py-20 md:py-28">
          <div className="grid gap-px bg-line md:grid-cols-2">
            {INDUSTRIES.map((i, idx) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="group flex flex-col bg-surface hover:shadow-[0_24px_48px_-24px_rgba(30,35,41,0.18)] transition-all"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                  <img
                    src={i.img}
                    alt={i.enName}
                    loading="lazy"
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex flex-col p-8 flex-1 justify-between">
                  <div>
                    <h3 className="text-[26px] font-bold tracking-[-0.02em]">
                      {t(i.idName, i.enName)}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {t(i.idDesc, i.enDesc)}
                    </p>
                  </div>
                  <div className="mt-8 hairline pt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink flex items-center justify-between">
                    <span>{t("Pelajari Aplikasi", "Explore Application")}</span>
                    <ArrowUpRight className="h-4 w-4 text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
