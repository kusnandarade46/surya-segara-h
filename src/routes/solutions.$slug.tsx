import { createFileRoute, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero, PrimaryCTA } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

type Solution = {
  slug: string;
  idTitle: string;
  enTitle: string;
  idIntro: string;
  enIntro: string;
  idFeatures: string[];
  enFeatures: string[];
};

const SOLUTIONS: Solution[] = [
  {
    slug: "rental",
    idTitle: "Cat Rental Store",
    enTitle: "Cat Rental Store",
    idIntro:
      "Opsi sewa (rental) alat berat Caterpillar yang fleksibel untuk menjaga produktivitas proyek Anda tetap berjalan tepat waktu tanpa beban kepemilikan aset jangka panjang.",
    enIntro:
      "Flexible Caterpillar heavy equipment rental options to keep your project productivity running on time without long-term asset ownership burdens.",
    idFeatures: [
      "Sewa fleksibel harian, mingguan, atau bulanan",
      "Armada berumur muda dengan pemeliharaan resmi standar Cat",
      "Dukungan teknisi standby langsung di lokasi proyek",
      "Pilihan sewa unit lepas kunci atau dengan operator tersertifikasi",
      "Penggantian unit cepat jika terjadi kendala teknis (minimum downtime)",
      "Akses armada sewa lengkap dari excavator, grader, hingga genset",
    ],
    enFeatures: [
      "Flexible daily, weekly, or monthly rental options",
      "Young fleet maintained strictly to official Cat standards",
      "On-site standby technician support directly at your worksite",
      "Bare rental or certified operator rental options",
      "Fast replacement units to guarantee minimum downtime",
      "Access to a complete rental fleet including excavators, graders, and gensets",
    ],
  },
  {
    slug: "parts",
    idTitle: "Cat Parts",
    enTitle: "Cat Parts (parts.cat.com)",
    idBody:
      "Akses mudah ke jutaan suku cadang asli Caterpillar secara online 24/7 dengan jaminan keaslian dan presisi tinggi.",
    idIntro:
      "Suku cadang resmi asli Caterpillar untuk memastikan daya tahan, efisiensi bahan bakar, dan umur pakai alat berat Anda tetap maksimal.",
    enIntro:
      "Genuine Caterpillar spare parts to ensure durability, fuel efficiency, and maximum service life of your heavy equipment.",
    idFeatures: [
      "Pemesanan online 24/7 via parts.cat.com",
      "Jaminan suku cadang 100% asli dari Caterpillar",
      "Jaringan distribusi dan pengiriman cepat ke seluruh Indonesia",
      "Pemeriksaan kecocokan part otomatis berdasarkan Serial Number mesin",
      "Opsi komponen rekondisi resmi (Cat Reman) yang ekonomis",
      "Bantuan teknis pencarian part oleh spesialis Trakindo",
    ],
    enFeatures: [
      "24/7 online ordering via parts.cat.com",
      "100% genuine Caterpillar parts guarantee",
      "Fast distribution and delivery network across Indonesia",
      "Automated compatibility checks using machine Serial Numbers",
      "Economical official remanufactured parts (Cat Reman) options",
      "Dedicated parts lookup assistance by Trakindo specialists",
    ],
  },
  {
    slug: "services",
    idTitle: "Layanan Pemeliharaan",
    enTitle: "Maintenance & Service",
    idIntro:
      "Kontrak pemeliharaan resmi, servis berkala, perbaikan darurat 24/7, dan rebuild unit oleh teknisi ahli tersertifikasi Caterpillar untuk menjaga uptime armada Anda.",
    enIntro:
      "Customer Value Agreements (CVA), scheduled maintenance, 24/7 emergency repairs, and unit rebuilds by certified Caterpillar technicians to secure your fleet uptime.",
    idFeatures: [
      "Kontrak Pemeliharaan Resmi (Customer Value Agreement - CVA)",
      "Servis berkala preventif terjadwal di lokasi proyek",
      "Layanan servis darurat 24/7 di lapangan",
      "Uji emisi dan pemantauan kondisi oli mesin secara rutin (S·O·S℠)",
      "Program rekonstruksi alat berat menyeluruh (Cat Certified Rebuild)",
      "Teknisi ahli berpengalaman dengan sertifikasi resmi Caterpillar",
    ],
    enFeatures: [
      "Customer Value Agreements (CVA) tailored to your budget",
      "Scheduled preventive maintenance directly at your worksite",
      "24/7 on-site emergency breakdown repairs",
      "Scheduled Oil Sampling (S·O·S℠) and fluid analysis services",
      "Comprehensive machine rebuilding (Cat Certified Rebuild program)",
      "Highly experienced technicians with official Caterpillar certification",
    ],
  },
  {
    slug: "financing",
    idTitle: "Skema Pembiayaan & Promo",
    enTitle: "Financing & Promos",
    idIntro:
      "Program pembiayaan bisnis yang fleksibel dari Cat Financial serta promosi khusus untuk membantu kepemilikan alat berat Caterpillar menjadi lebih mudah.",
    enIntro:
      "Flexible business financing options from Cat Financial and special promotions to make owning Caterpillar heavy equipment easier and more affordable.",
    idFeatures: [
      "Opsi uang muka rendah dan tenor cicilan fleksibel",
      "Program cicilan dengan suku bunga spesial (seperti Promo BINTANG)",
      "Proses persetujuan pembiayaan yang cepat dan transparan",
      "Pilihan skema Sewa Guna Usaha (Finance Lease / Operating Lease)",
      "Paket bundling unit baru beserta kontrak pemeliharaan & parts",
      "Dukungan konsultan finansial B2B berpengalaman untuk perencanaan investasi",
    ],
    enFeatures: [
      "Low down payment options and flexible installment tenors",
      "Special low-interest rate campaigns (such as the BINTANG Promo)",
      "Fast and transparent credit approval process",
      "Finance Lease and Operating Lease options",
      "Bundled packages combining equipment purchase, CVA, and parts",
      "Support from experienced B2B financial consultants to optimize your ROI",
    ],
  },
];

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const s = SOLUTIONS.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) => {
    const s = loaderData!;
    return {
      meta: [
        { title: `${s.enTitle} — Solusi Trakindo Utama` },
        { name: "description", content: s.enIntro },
        { property: "og:title", content: `${s.enTitle} — Trakindo Utama` },
        { property: "og:description", content: s.enIntro },
        { property: "og:url", content: `/solutions/${s.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${s.slug}` }],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const s = Route.useLoaderData();
  const { t, lang } = useLang();
  const features = lang === "id" ? s.idFeatures : s.enFeatures;

  return (
    <>
      <PageHero
        eyebrow={t("SOLUSI TRAKINDO", "TRAKINDO SOLUTION")}
        title={t(s.idTitle, s.enTitle)}
        intro={t(s.idIntro, s.enIntro)}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t("CAKUPAN LAYANAN", "SCOPE OF SERVICE")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.025em]">
              {t("Detail layanan kami.", "What our service includes.")}
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f: string) => (
                <li key={f} className="flex items-start gap-3 border-t border-line pt-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                  <span className="text-[15px] text-ink">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PrimaryCTA to="/contact">
                {t("Minta Penawaran Harga", "Request a Quote Proposal")}
              </PrimaryCTA>
            </div>
          </div>
          <div className="lg:col-span-5">
            <LeadForm variant="consultation" preFilledInterest={`${s.idTitle} Service Request`} />
          </div>
        </div>
      </section>
    </>
  );
}
