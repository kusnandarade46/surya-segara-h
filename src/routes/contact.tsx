import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/i18n";
import { Eyebrow, PageHero } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SSH Company — Industrial Safety Specialists" },
      { name: "description", content: "Talk to SSH Company specialists about H2S services, gas detection, iNet Connected Safety and SAFER One emergency response in Indonesia." },
      { property: "og:title", content: "Contact — SSH Company" },
      { property: "og:description", content: "Get in touch with our industrial safety specialists." },
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
        eyebrow={t("KONTAK", "CONTACT")}
        title={t("Hubungi spesialis keselamatan industri kami.", "Talk to our industrial safety specialists.")}
        intro={t(
          "Tim kami siap membahas tantangan operasional Anda dan menyiapkan penilaian awal.",
          "Our team is ready to discuss your operational challenges and prepare an initial assessment.",
        )}
      />

      <section className="border-b border-line bg-background">
        <div className="container-ssh grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{t("KANTOR PUSAT", "HEAD OFFICE")}</Eyebrow>
            <h2 className="mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight tracking-[-0.025em]">
              PT Surya Segara Hana
            </h2>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <MapPin className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {t("Alamat", "Address")}
                  </dt>
                  <dd className="mt-1.5 text-ink">
                    Wisma Industri, Lt. 12<br />
                    Jl. Jend. Sudirman Kav. 1<br />
                    Jakarta 12190, Indonesia
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <Phone className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {t("Telepon", "Phone")}
                  </dt>
                  <dd className="mt-1.5 text-ink">+62 21 0000 0000</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <Mail className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">Email</dt>
                  <dd className="mt-1.5 text-ink">contact@sshcompany.co.id</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-t border-line pt-5">
                <MessageCircle className="mt-1 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">WhatsApp</dt>
                  <dd className="mt-1.5 text-ink">+62 812 0000 0000</dd>
                </div>
              </div>
            </dl>

            <div className="mt-10 aspect-[16/10] w-full overflow-hidden border border-line bg-surface-alt">
              <iframe
                title="SSH Company office map"
                src="https://www.google.com/maps?q=Jakarta&output=embed"
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
