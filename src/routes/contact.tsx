import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Hubungi PT Trakindo Utama — Spesialis Alat Berat Caterpillar" },
      {
        name: "description",
        content:
          "Hubungi perwakilan Trakindo Utama untuk konsultasi pengadaan unit alat berat, rental unit Cat Rental Store, dan pemesanan suku cadang asli Cat Parts.",
      },
      { property: "og:title", content: "Hubungi Kami — Trakindo Utama" },
      {
        property: "og:description",
        content: "Dapatkan dukungan dari spesialis sales dan servis alat berat Caterpillar resmi.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t("HUBUNGI KAMI", "CONTACT US")}
        title={t(
          "Bicarakan kebutuhan alat berat Cat Anda dengan spesialis kami.",
          "Talk to our Caterpillar heavy equipment specialists.",
        )}
        intro={t(
          "Tim kami siap menjawab tantangan operasional bisnis Anda dan menyiapkan proposal solusi pembiayaan, rental, maupun perawatan terbaik.",
          "Our team is ready to analyze your business requirements and prepare the best proposals for acquisition, rental, or maintenance.",
        )}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t("KANTOR PUSAT", "HEAD OFFICE")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.025em] text-secondary">
              PT Trakindo Utama
            </h2>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <MapPin className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {t("Alamat", "Address")}
                  </dt>
                  <dd className="mt-1.5 text-ink">
                    Gedung Trakindo Utama
                    <br />
                    Jl. Raya Cilandak KKO No. 1<br />
                    Jakarta 12560, Indonesia
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <Phone className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {t("Telepon / Call Center", "Call Center")}
                  </dt>
                  <dd className="mt-1.5 text-ink">+62 21 782 2373 / 1500-228</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <Mail className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    Email
                  </dt>
                  <dd className="mt-1.5 text-ink">info@trakindo.co.id</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <MessageCircle className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    WhatsApp Customer Care
                  </dt>
                  <dd className="mt-1.5 text-ink">+62 811 1500 228</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 aspect-[16/10] w-full overflow-hidden border border-line bg-surface-alt">
              <iframe
                title="Trakindo Utama head office map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8117769919535!2d106.81223947475143!3d-6.288494993700465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ff4ab22b49%3A0x7d0186fe9df1bc1e!2sPT.%20Trakindo%20Utama%20Head%20Office!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm variant="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
