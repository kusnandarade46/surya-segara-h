import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";
import { PageHero } from "@/components/site/ui";
import oilgasImg from "@/assets/industry-oilgas.jpg";
import petroImg from "@/assets/industry-petrochemical.jpg";
import refineryImg from "@/assets/industry-refinery.jpg";
import lngImg from "@/assets/industry-lng.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import powerImg from "@/assets/industry-power.jpg";

export const INDUSTRIES = [
  { slug: "oil-gas", idName: "Minyak & Gas", enName: "Oil & Gas", img: oilgasImg },
  { slug: "petrochemical", idName: "Petrokimia", enName: "Petrochemical", img: petroImg },
  { slug: "refinery", idName: "Kilang", enName: "Refinery", img: refineryImg },
  { slug: "lng", idName: "LNG", enName: "LNG", img: lngImg },
  { slug: "mining", idName: "Pertambangan", enName: "Mining", img: miningImg },
  { slug: "manufacturing", idName: "Manufaktur", enName: "Manufacturing", img: powerImg },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Protect — SSH Company" },
      { name: "description", content: "Safety technology for Oil & Gas, Petrochemical, Refinery, LNG, Mining and Manufacturing operators in Indonesia." },
      { property: "og:title", content: "Industries — SSH Company" },
      { property: "og:description", content: "Safety solutions across high-risk industrial sectors." },
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
        eyebrow={t("INDUSTRI", "INDUSTRIES")}
        title={t("Solusi keselamatan untuk lingkungan operasi paling kritis.", "Safety solutions for the most mission-critical operating environments.")}
        intro={t(
          "Setiap industri memiliki risiko dan kerangka kepatuhan yang unik. Kami merancang program keselamatan yang sesuai.",
          "Each industry has unique risks and compliance frameworks. We design safety programs accordingly.",
        )}
      />

      <section className="bg-background">
        <div className="container-ssh py-20 md:py-28">
          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((i, idx) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="group flex flex-col bg-surface"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={i.img}
                    alt={i.enName}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <h3 className="text-[24px] font-bold tracking-[-0.02em]">{t(i.idName, i.enName)}</h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 flex-none text-ink" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
