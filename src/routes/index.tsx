import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Compass,
  FileText,
  BadgeAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, GhostCTA, PrimaryCTA, SectionHeader } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define products locally to avoid import cycle or path issues, and ensure strict type safety
const HOMEPAGE_PRODUCTS = [
  {
    slug: "cat-320-gc",
    name: "Cat 320 GC",
    category: "Excavator",
    status: "New",
    industry: "Konstruksi",
    budget: "IDR 1.5M - 1.8M",
    desc: "Excavator hidrolik 20-ton yang efisien dan hemat bahan bakar.",
  },
  {
    slug: "cat-305-5e2",
    name: "Cat 305.5E2",
    category: "Excavator",
    status: "Rental",
    industry: "Perkebunan",
    budget: "IDR 750jt - 900jt",
    desc: "Mini excavator kompak dengan performa tinggi untuk area sempit.",
  },
  {
    slug: "cat-120",
    name: "Cat 120",
    category: "Grader",
    status: "New",
    industry: "Konstruksi",
    budget: "IDR 2.4M - 2.8M",
    desc: "Motor grader dengan efisiensi operasional tinggi.",
  },
  {
    slug: "cat-140-gc",
    name: "Cat 140 GC",
    category: "Grader",
    status: "Used",
    industry: "Pertambangan",
    budget: "IDR 3.5M - 4.0M",
    desc: "Motor grader mekanik tangguh untuk perataan tanah presisi.",
  },
  {
    slug: "cat-de33gc",
    name: "Cat DE33GC",
    category: "Genset",
    status: "New",
    industry: "Pembangkit Listrik",
    budget: "IDR 250jt - 320jt",
    desc: "Genset diesel 33 kVA andal untuk pasokan daya darurat.",
  },
  {
    slug: "cat-de150gc",
    name: "Cat DE150GC",
    category: "Genset",
    status: "Used",
    industry: "Pembangkit Listrik",
    budget: "IDR 600jt - 700jt",
    desc: "Genset diesel 150 kVA tangguh untuk beban berat industri.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trakindo Utama — Solusi Alat Berat Caterpillar Resmi Indonesia" },
      {
        name: "description",
        content:
          "Solusi terintegrasi Trakindo Utama: Sewa (Cat Rental Store), suku cadang resmi Cat Parts, beli alat berat baru & bekas bersertifikat, dan teknologi Cat MineStar.",
      },
      { property: "og:title", content: "Trakindo Utama — Solusi Alat Berat Resmi" },
      {
        property: "og:description",
        content:
          "Dealer resmi Caterpillar di Indonesia. Beli alat berat baru/bekas, rental sewa cepat, dan suku cadang asli.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof HOMEPAGE_PRODUCTS>([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(HOMEPAGE_PRODUCTS);

  // Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      role: t("Kontraktor / Pemilik Bisnis (B2B Buyer)", "Contractor / B2B Business Owner"),
      name: "Budi Wijaya, PT Wijaya Konstruksi",
      text: t(
        '"Skema pembiayaan Promo BINTANG dari Trakindo sangat membantu arus kas bisnis kami dalam penambahan 5 unit Excavator Cat 320 baru. Respon penawaran harga dan persetujuan kreditnya sangat cepat."',
        '"Trakindo\'s BINTANG financing promo was a game-changer for our cash flow when expanding our fleet with 5 new Cat 320 Excavators. Their quotation and credit approval turnaround was exceptionally fast."',
      ),
    },
    {
      role: t("Project Manager / Site Manager", "Project Manager / Site Manager"),
      name: "Ir. Hermawan, Proyek Tol Trans-Sumatera",
      text: t(
        '"Saat proyek tol mengejar deadline ketat di lapangan, sewa cepat unit Cat 305.5E2 mini excavator dari Cat Rental Store sangat menyelamatkan kami. Unit datang bersih, prima, dan didukung servis standby 24 jam."',
        '"Chasing tight deadlines on the Trans-Sumatera highway, quick rental options from Cat Rental Store saved our project. The Cat 305.5E2 arrived in pristine condition, backed by 24/7 on-site service support."',
      ),
    },
    {
      role: t("Procurement / Maintenance Officer", "Procurement / Maintenance Officer"),
      name: "Lina Susanti, PT Indo Mineral Utama",
      text: t(
        '"Kemudahan mencari nomor part dan memesan suku cadang asli online via parts.cat.com sangat memangkas birokrasi pembelian kami. Dipadukan dengan sensor Cat Product Link™, downtime kami turun 30%."',
        '"Finding part numbers and ordering genuine spares online via parts.cat.com has streamlined our purchasing process. Combined with Cat Product Link™ telemetry, our machinery downtime dropped by 30%."',
      ),
    },
  ];

  // Countdown Timers State
  const [timerBintang, setTimerBintang] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  const [timerRental, setTimerRental] = useState({ days: 12, hours: 0, minutes: 0, seconds: 0 });

  // Calculate Countdown (Simulated decrement)
  useEffect(() => {
    const targetBintang = new Date().getTime() + 3 * 24 * 60 * 60 * 1000 - 15000;
    const targetRental = new Date().getTime() + 12 * 24 * 60 * 60 * 1000 - 30000;

    const interval = setInterval(() => {
      const now = new Date().getTime();

      const diffB = targetBintang - now;
      const dB = Math.floor(diffB / (1000 * 60 * 60 * 24));
      const hB = Math.floor((diffB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mB = Math.floor((diffB % (1000 * 60 * 60)) / (1000 * 60));
      const sB = Math.floor((diffB % (1000 * 60)) / 1000);
      setTimerBintang({
        days: dB > 0 ? dB : 0,
        hours: hB > 0 ? hB : 0,
        minutes: mB > 0 ? mB : 0,
        seconds: sB > 0 ? sB : 0,
      });

      const diffR = targetRental - now;
      const dR = Math.floor(diffR / (1000 * 60 * 60 * 24));
      const hR = Math.floor((diffR % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mR = Math.floor((diffR % (1000 * 60 * 60)) / (1000 * 60));
      const sR = Math.floor((diffR % (1000 * 60)) / 1000);
      setTimerRental({
        days: dR > 0 ? dR : 0,
        hours: hR > 0 ? hR : 0,
        minutes: mR > 0 ? mR : 0,
        seconds: sR > 0 ? sR : 0,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update suggestions on search input change
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const matching = HOMEPAGE_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setSuggestions(matching);
  }, [searchQuery]);

  // Handle Search & Filter logic
  useEffect(() => {
    let result = HOMEPAGE_PRODUCTS;

    if (searchQuery.trim()) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (filterCategory !== "All") {
      result = result.filter((p) => p.category === filterCategory);
    }

    if (filterStatus !== "All") {
      result = result.filter(
        (p) =>
          p.status === filterStatus ||
          (p.status === "New" && filterStatus === "New") ||
          (p.status === "Used" && filterStatus === "Used") ||
          (p.status === "Rental" && filterStatus === "Rental"),
      );
    }

    if (filterIndustry !== "All") {
      result = result.filter((p) => p.industry === filterIndustry);
    }

    setFilteredProducts(result);
  }, [searchQuery, filterCategory, filterStatus, filterIndustry]);

  const selectSuggestion = (name: string) => {
    setSearchQuery(name);
    setShowSuggestions(false);
  };

  return (
    <>
      {/* HERO SECTION with Smart Search & Filters */}
      <section className="relative border-b border-line bg-secondary text-surface overflow-hidden">
        {/* Background yellow accent block */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-brand/10 transform skew-x-[-15deg] translate-x-24 hidden lg:block" />

        <div className="container-ssh pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
          <div className="max-w-4xl">
            <Eyebrow>
              <span className="text-brand font-bold uppercase tracking-[0.16em]">
                PT Trakindo Utama
              </span>
            </Eyebrow>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              {t(
                "Solusi Alat Berat & Suku Cadang Caterpillar Resmi.",
                "Official Caterpillar Heavy Equipment & Parts Solutions.",
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-surface/80">
              {t(
                "Temukan unit excavator, grader, dan genset baru maupun bekas bersertifikat, sewa unit cepat di Cat Rental Store, dan jutaan suku cadang asli di parts.cat.com.",
                "Explore brand new and certified used excavators, graders, and gensets. Access quick rentals at the Cat Rental Store, and buy genuine parts at parts.cat.com.",
              )}
            </p>

            {/* Smart Search & Auto-Suggest */}
            <div className="mt-12 max-w-3xl relative">
              <div className="bg-surface text-ink flex items-center p-2 shadow-2xl border border-line">
                <Search className="ml-3 h-5 w-5 text-ink-soft flex-shrink-0" />
                <input
                  type="text"
                  placeholder={t(
                    "Cari tipe alat berat (misal: Excavator, Cat 320)...",
                    "Search heavy equipment (e.g., Excavator, Cat 320)...",
                  )}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="w-full bg-transparent px-4 py-3 text-[16px] outline-none font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSuggestions([]);
                    }}
                    className="px-2 font-mono text-[11px] uppercase tracking-wider text-ink-soft hover:text-brand"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Auto-suggest dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-surface border border-line shadow-2xl divide-y divide-line text-ink">
                  {suggestions.map((p) => (
                    <button
                      key={p.slug}
                      onClick={() => selectSuggestion(p.name)}
                      className="w-full text-left px-5 py-3 hover:bg-brand hover:text-brand-foreground font-semibold flex items-center justify-between text-[14px]"
                    >
                      <span>
                        {p.name} — {p.category}
                      </span>
                      <span className="font-mono text-[10px] uppercase opacity-75">{p.status}</span>
                    </button>
                  ))}
                </div>
              )}
              {showSuggestions && searchQuery && suggestions.length === 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 z-30 bg-surface border border-line p-4 text-center text-ink-soft text-[14px]">
                  {t("Tidak ada alat berat yang cocok", "No matching heavy equipment found")}
                </div>
              )}
            </div>

            {/* Interactive Filters */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-surface/60 mb-2">
                  Category
                </label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full bg-surface-alt/10 border border-surface/30 px-3 py-2.5 text-[13px] font-bold text-surface focus:outline-none focus:border-brand rounded-none"
                >
                  <option className="text-ink" value="All">
                    {t("Semua Kategori", "All Categories")}
                  </option>
                  <option className="text-ink" value="Excavator">
                    Excavator
                  </option>
                  <option className="text-ink" value="Grader">
                    Motor Grader
                  </option>
                  <option className="text-ink" value="Genset">
                    Generator Set (Genset)
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-surface/60 mb-2">
                  Machine Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full bg-surface-alt/10 border border-surface/30 px-3 py-2.5 text-[13px] font-bold text-surface focus:outline-none focus:border-brand rounded-none"
                >
                  <option className="text-ink" value="All">
                    {t("Semua Status", "All Statuses")}
                  </option>
                  <option className="text-ink" value="New">
                    {t("Unit Baru", "New Unit")}
                  </option>
                  <option className="text-ink" value="Used">
                    {t("Bekas Bersertifikat", "Certified Used")}
                  </option>
                  <option className="text-ink" value="Rental">
                    {t("Sewa (Rental)", "Rental Unit")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] uppercase tracking-widest text-surface/60 mb-2">
                  Industry Application
                </label>
                <select
                  value={filterIndustry}
                  onChange={(e) => setFilterIndustry(e.target.value)}
                  className="w-full bg-surface-alt/10 border border-surface/30 px-3 py-2.5 text-[13px] font-bold text-surface focus:outline-none focus:border-brand rounded-none"
                >
                  <option className="text-ink" value="All">
                    {t("Semua Industri", "All Industries")}
                  </option>
                  <option className="text-ink" value="Konstruksi">
                    {t("Konstruksi", "Construction")}
                  </option>
                  <option className="text-ink" value="Pertambangan">
                    {t("Pertambangan", "Mining")}
                  </option>
                  <option className="text-ink" value="Perkebunan">
                    {t("Perkebunan/Kehutanan", "Plantation/Forestry")}
                  </option>
                  <option className="text-ink" value="Pembangkit Listrik">
                    {t("Pembangkit Listrik", "Power Generation")}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER RESULTS / FEATURED PRODUCTS */}
      <section className="bg-background border-b border-line py-20">
        <div className="container-ssh">
          <div className="flex items-center justify-between border-b border-line pb-4 mb-10">
            <h2 className="font-mono text-[13px] font-bold uppercase tracking-wider text-ink-soft flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {t("Hasil Pencarian & Filter", "Search & Filter Results")} ({filteredProducts.length})
            </h2>
            {(searchQuery ||
              filterCategory !== "All" ||
              filterStatus !== "All" ||
              filterIndustry !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterCategory("All");
                  setFilterStatus("All");
                  setFilterIndustry("All");
                }}
                className="font-mono text-[11px] uppercase tracking-wider text-brand hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="bg-surface border border-line p-16 text-center text-ink-soft">
              <p className="text-[16px] font-semibold">
                {t(
                  "Tidak ditemukan unit alat berat yang sesuai filter Anda.",
                  "No heavy equipment unit found matching your filters.",
                )}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterCategory("All");
                  setFilterStatus("All");
                  setFilterIndustry("All");
                }}
                className="mt-4 bg-brand text-brand-foreground px-6 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-brand/90"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((p) => (
                <div
                  key={p.slug}
                  className="group bg-surface p-8 flex flex-col justify-between border border-line transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(30,35,41,0.18)]"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-wider text-ink-soft">
                      <span>{p.category.toUpperCase()}</span>
                      <span className="px-2 py-0.5 bg-brand/10 text-brand font-bold uppercase">
                        {p.status}
                      </span>
                    </div>
                    <h3 className="mt-8 text-[28px] font-black leading-none tracking-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
                    <div className="mt-5 space-y-1">
                      <div className="flex justify-between text-[12px] border-t border-line/50 pt-2">
                        <span className="text-ink-soft">
                          {t("Aplikasi Industri:", "Industry App:")}
                        </span>
                        <span className="font-semibold text-ink">{p.industry}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-ink-soft">
                          {t("Kisaran Anggaran:", "Budget Est:")}
                        </span>
                        <span className="font-bold text-brand">{p.budget}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 pt-4 border-t border-line flex items-center justify-between">
                    <Link
                      to="/products/$slug"
                      params={{ slug: p.slug }}
                      className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink hover:text-brand flex items-center gap-1.5"
                    >
                      {t("Detail Spesifikasi", "View Details")}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    {/* Pre-filled Request Quote trigger */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="bg-brand text-brand-foreground px-4 py-2 text-[10px] font-bold uppercase tracking-wider hover:bg-brand/90 cursor-pointer">
                          {t("Ajukan Quote", "Request Quote")}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold">
                            {t("Permintaan Kuotasi Cepat", "Quick Quote Request")}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-2">
                          <LeadForm
                            variant="consultation"
                            preFilledInterest={`${p.name} Quote Request`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DYNAMIC URGENCY PROMOTIONS SECTION */}
      <section className="bg-surface border-b border-line py-24">
        <div className="container-ssh">
          <SectionHeader
            index="PROMO EXCLUSIVE"
            eyebrow={t("PROMOSI & PENAWARAN AKTIF", "ACTIVE PROMOTIONS & DEALS")}
            title={t(
              "Hemat Lebih Banyak dengan Penawaran Terbatas.",
              "Save More with Limited-Time Offers.",
            )}
            intro={t(
              "Manfaatkan program pembiayaan bunga spesial dari Cat Financial dan paket rental khusus sebelum berakhir.",
              "Take advantage of special financing rate campaigns from Cat Financial and tailored rental packages before they expire.",
            )}
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Promo 1: BINTANG Used Equipment */}
            <div className="border border-line bg-secondary text-surface p-8 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute right-0 top-0 bg-brand text-brand-foreground px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest">
                {t("Uang Muka Ringan", "Low Down Payment")}
              </div>
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <BadgeAlert className="h-5 w-5 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                    {t("Promo Terbatas", "Limited Deal")}
                  </span>
                </div>
                <h3 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight">
                  Promo BINTANG
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-surface/70">
                  {t(
                    "Dapatkan kemudahan kepemilikan alat berat bekas bersertifikat (Certified Used) Caterpillar dengan bunga khusus mulai 2.99% dan opsi tenor hingga 36 bulan.",
                    "Own a certified Caterpillar used equipment with special interest rates starting from 2.99% and flexible terms up to 36 months.",
                  )}
                </p>

                {/* Countdown Timer */}
                <div className="mt-8 bg-surface/5 border border-surface/10 p-4 flex gap-4 items-center">
                  <Clock className="h-5 w-5 text-brand" />
                  <div>
                    <div className="font-mono text-[9px] uppercase text-surface/50 tracking-widest">
                      {t("Waktu Tersisa:", "Time Remaining:")}
                    </div>
                    <div className="mt-1 font-mono text-[18px] font-bold tracking-wider flex gap-1">
                      <span>{timerBintang.days}d</span>:<span>{timerBintang.hours}h</span>:
                      <span>{timerBintang.minutes}m</span>:<span>{timerBintang.seconds}s</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-surface/10 flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-brand text-brand-foreground px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-brand/90 transition-colors cursor-pointer">
                      {t("Ambil Promo", "Claim Promo")}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        {t("Klaim Promo BINTANG", "Claim Promo BINTANG")}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                      <LeadForm
                        variant="consultation"
                        preFilledInterest="Klaim Promo BINTANG (Used Equipment Financing)"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <a
                  href="tel:+62217822373"
                  className="border border-surface/30 px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-surface hover:text-secondary transition-colors"
                >
                  {t("Hubungi Sales", "Contact Sales")}
                </a>
              </div>
            </div>

            {/* Promo 2: RENTAL ZERO HOUR */}
            <div className="border border-line bg-surface p-8 relative flex flex-col justify-between group overflow-hidden">
              <div className="absolute right-0 top-0 bg-secondary text-surface px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest">
                {t("Bebas Batasan Min.", "No Min. Hours")}
              </div>
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <BadgeAlert className="h-5 w-5 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                    {t("Sewa Cepat", "Quick Rental")}
                  </span>
                </div>
                <h3 className="mt-4 text-[32px] font-extrabold leading-tight tracking-tight text-secondary">
                  Rental Zero Hour
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {t(
                    "Sewa excavator Cat 320 atau genset tanpa batas minimum jam kerja untuk bulan pertama. Sangat ideal untuk percepatan konstruksi infrastruktur di lapangan.",
                    "Rent a Cat 320 excavator or generator set with zero minimum working hour restrictions for the first month. Perfect for field utility works.",
                  )}
                </p>

                {/* Countdown Timer */}
                <div className="mt-8 bg-secondary/5 border border-line p-4 flex gap-4 items-center text-secondary">
                  <Clock className="h-5 w-5 text-brand" />
                  <div>
                    <div className="font-mono text-[9px] uppercase text-ink-soft tracking-widest">
                      {t("Waktu Tersisa:", "Time Remaining:")}
                    </div>
                    <div className="mt-1 font-mono text-[18px] font-bold tracking-wider flex gap-1">
                      <span>{timerRental.days}d</span>:<span>{timerRental.hours}h</span>:
                      <span>{timerRental.minutes}m</span>:<span>{timerRental.seconds}s</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-line flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-brand text-brand-foreground px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-brand/90 transition-colors cursor-pointer">
                      {t("Ambil Promo", "Claim Promo")}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold">
                        {t("Klaim Promo Rental Zero Hour", "Claim Promo Rental Zero Hour")}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-2">
                      <LeadForm
                        variant="consultation"
                        preFilledInterest="Klaim Promo Rental Zero Hour"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <a
                  href="tel:+62217822373"
                  className="border border-secondary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-surface transition-all"
                >
                  {t("Hubungi Sales", "Contact Sales")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY TABS SECTION (EPIC 1) */}
      <section className="bg-background border-b border-line py-24">
        <div className="container-ssh">
          <SectionHeader
            index="TEKNOLOGI CAT"
            eyebrow={t("INTEGRASI TEKNOLOGI PINTAR", "SMART TECHNOLOGY INTEGRATION")}
            title={t(
              "Konektivitas Canggih untuk Efisiensi Maksimal.",
              "Advanced Connectivity for Maximum Efficiency.",
            )}
            intro={t(
              "Kurangi downtime, otomatisasi armada, dan lindungi kru Anda di lapangan dengan integrasi teknologi telemeter Caterpillar.",
              "Reduce downtime, automate fleets, and protect your crew in the field with Caterpillar telemetry technology integrations.",
            )}
          />

          <Tabs defaultValue="minestar" className="mt-16 max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-secondary p-1 rounded-none h-14">
              <TabsTrigger
                value="minestar"
                className="font-mono text-[10px] md:text-[12px] uppercase tracking-wider text-surface/60 data-[state=active]:bg-brand data-[state=active]:text-brand-foreground rounded-none h-full font-bold cursor-pointer"
              >
                Cat MineStar™
              </TabsTrigger>
              <TabsTrigger
                value="productlink"
                className="font-mono text-[10px] md:text-[12px] uppercase tracking-wider text-surface/60 data-[state=active]:bg-brand data-[state=active]:text-brand-foreground rounded-none h-full font-bold cursor-pointer"
              >
                Product Link™
              </TabsTrigger>
              <TabsTrigger
                value="command"
                className="font-mono text-[10px] md:text-[12px] uppercase tracking-wider text-surface/60 data-[state=active]:bg-brand data-[state=active]:text-brand-foreground rounded-none h-full font-bold cursor-pointer"
              >
                Cat Command
              </TabsTrigger>
            </TabsList>

            <div className="mt-8 bg-surface border border-line p-8 md:p-12">
              <TabsContent value="minestar" className="space-y-6 animate-fade-in outline-none">
                <div className="flex items-center gap-2 text-brand font-mono text-[12px] font-bold uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" /> Fleet & Automation Management
                </div>
                <h3 className="text-[28px] font-black text-secondary">Cat MineStar™ System</h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {t(
                    "Cat MineStar™ menghadirkan rangkaian kemampuan teknologi tambang terlengkap di industri. Mulai dari pelacakan armada real-time, manajemen muatan material otomatis, hingga otonomi penuh truk tambang raksasa. Membantu Anda menaikkan efisiensi ton per jam dan menjamin kepatuhan K3 kru.",
                    "Cat MineStar™ offers the industry's broadest suite of mining technology capabilities. From real-time fleet tracking and automated payload management to full haul truck autonomy, it helps boost tons-per-hour efficiency while ensuring K3 safety compliance.",
                  )}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-line">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Manajemen rute haulage otomatis", "Automated haulage routing")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Pelacakan berat muatan riil", "Real-time payload weight tracking")}
                    </span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="productlink" className="space-y-6 animate-fade-in outline-none">
                <div className="flex items-center gap-2 text-brand font-mono text-[12px] font-bold uppercase tracking-wider">
                  <Compass className="h-4 w-4" /> Telematics & Condition Monitoring
                </div>
                <h3 className="text-[28px] font-black text-secondary">
                  Cat Product Link™ & VisionLink®
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {t(
                    "Cat Product Link™ mengumpulkan data nirkabel dari sensor internal alat berat Anda (lokasi, waktu kerja, konsumsi solar, kode eror) secara akurat. Data disinkronkan langsung ke VisionLink® sehingga tim pemeliharaan dapat mendeteksi gejala kerusakan dini sebelum terjadi breakdown parah.",
                    "Cat Product Link™ gathers accurate wireless telemetry from machine sensors (location, hours, fuel burn, fault codes). Data syncs to VisionLink® to enable maintenance officers to detect early warnings before catastrophic breakdowns happen.",
                  )}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-line">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Laporan konsumsi solar & idle time", "Fuel burn & idle time reports")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Notifikasi fault codes nirkabel", "Wireless fault code notifications")}
                    </span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="command" className="space-y-6 animate-fade-in outline-none">
                <div className="flex items-center gap-2 text-brand font-mono text-[12px] font-bold uppercase tracking-wider">
                  <Users className="h-4 w-4" /> Remote Control & Autonomy
                </div>
                <h3 className="text-[28px] font-black text-secondary">Cat Command</h3>
                <p className="text-[16px] leading-relaxed text-ink-soft">
                  {t(
                    "Cat Command memungkinkan operator mengoperasikan unit dozer, excavator, atau dump truck secara jarak jauh menggunakan konsol over-the-shoulder atau stasiun kendali jarak jauh (operator station) dari ruang kontrol. Menghilangkan risiko paparan kecelakaan di area labil atau berbahaya.",
                    "Cat Command enables operators to control dozers, excavators, or haul trucks remotely using over-the-shoulder consoles or dedicated operator stations from the comfort of a control room, eliminating operator risk in high-hazard zones.",
                  )}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-line">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Kendali dozer jarak jauh 100%", "100% remote dozer operations")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-[14px] text-ink font-semibold">
                      {t("Semi-otonomi pemuatan material", "Semi-autonomous material loading")}
                    </span>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL SECTION (EPIC 1) */}
      <section className="bg-secondary text-surface py-24 border-b border-line relative overflow-hidden">
        <div className="container-ssh flex flex-col items-center">
          <Eyebrow>
            <span className="text-brand font-bold uppercase tracking-[0.16em]">
              {t("KATA MEREKA", "TESTIMONIALS")}
            </span>
          </Eyebrow>
          <h2 className="mt-4 text-center text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight">
            {t("Dipercaya Oleh Pemimpin Bisnis & Lapangan.", "Trusted by Business & Site Leaders.")}
          </h2>

          <div className="mt-16 max-w-4xl w-full border border-surface/10 bg-surface/5 p-8 md:p-14 text-center relative">
            <p className="text-[18px] md:text-[22px] font-medium leading-relaxed italic text-surface/90">
              {testimonials[activeTestimonial].text}
            </p>

            <div className="mt-8">
              <div className="font-bold text-brand text-[15px]">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="font-mono text-[10px] uppercase text-surface/50 tracking-wider mt-1">
                {testimonials[activeTestimonial].role}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-10 flex justify-center gap-3">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                className="grid h-12 w-12 place-items-center border border-surface/10 hover:bg-brand hover:text-brand-foreground transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-1.5 px-4">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 w-1.5 rounded-full transition-all ${
                      idx === activeTestimonial ? "bg-brand w-5" : "bg-surface/25"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                className="grid h-12 w-12 place-items-center border border-surface/10 hover:bg-brand hover:text-brand-foreground transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINK SECTIONS (official Cat links in PRD success metrics) */}
      <section className="bg-surface border-b border-line py-20">
        <div className="container-ssh text-center">
          <h2 className="text-[20px] font-extrabold tracking-tight text-secondary">
            {t("Tautan Penting Transaksional", "Important Transactional Links")}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://parts.cat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-secondary text-surface px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-brand hover:text-brand-foreground transition-all"
            >
              Go to parts.cat.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to="/solutions/rental"
              className="group inline-flex items-center gap-3 border border-secondary text-secondary px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-secondary hover:text-surface transition-all"
            >
              Go to Cat Rental Store
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-brand text-brand-foreground py-24">
        <div className="container-ssh grid gap-10 md:grid-cols-12 md:py-8">
          <div className="md:col-span-7">
            <Eyebrow>
              <span className="text-brand-foreground font-bold">
                {t("LANGKAH SELANJUTNYA", "NEXT STEP")}
              </span>
            </Eyebrow>
            <h2 className="mt-5 text-[clamp(2.25rem,6vw,4rem)] font-extrabold leading-[1] tracking-[-0.03em]">
              {t("Siap Meningkatkan Uptime Armada Anda?", "Ready to Improve Your Fleet Uptime?")}
            </h2>
          </div>
          <div className="flex flex-col justify-end md:col-span-5">
            <p className="max-w-md text-[17px] leading-relaxed text-brand-foreground/80">
              {t(
                "Diskusikan pengadaan alat berat Cat baru/bekas, sewa cepat di Cat Rental Store, atau kontrak servis CVA dengan spesialis kami hari ini.",
                "Discuss new/used Cat equipment acquisition, quick rentals from Cat Rental Store, or CVA maintenance contracts with our experts today.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-brand-foreground text-brand px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider hover:bg-brand-foreground/90 transition-colors cursor-pointer">
                    {t("Hubungi Spesialis Trakindo", "Contact Trakindo Specialist")}
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                      {t("Hubungi Spesialis Trakindo", "Contact Trakindo Specialist")}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-2">
                    <LeadForm variant="consultation" />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
