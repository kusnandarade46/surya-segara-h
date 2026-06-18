import { useState } from "react";
import { z } from "zod";
import { useLang } from "@/i18n";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(1).max(120),
  position: z.string().trim().max(120).optional().or(z.literal("")),
  industry: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(5).max(40),
  interest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(1500),
});

type Variant = "contact" | "consultation" | "demo" | "download";

export function LeadForm({
  variant = "contact",
  preFilledInterest = "",
}: {
  variant?: Variant;
  preFilledInterest?: string;
}) {
  const { t } = useLang();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const labels = {
    contact: { title: t("Hubungi Kami", "Contact Us"), cta: t("Kirim Pesan", "Send Message") },
    consultation: {
      title: t("Permintaan Konsultasi", "Request Consultation"),
      cta: t("Minta Konsultasi", "Request Consultation"),
    },
    demo: { title: t("Permintaan Demo", "Request Demo"), cta: t("Minta Demo", "Request Demo") },
    download: {
      title: t("Unduh Brosur", "Download Brochure"),
      cta: t("Kirim Unduhan", "Send Download"),
    },
  }[variant];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path.join(".")] = i.message;
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  const Field = ({
    name,
    label,
    type = "text",
    required = true,
    full = false,
    as = "input",
    defaultValue = "",
  }: {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    full?: boolean;
    as?: "input" | "textarea" | "select";
    options?: string[];
    defaultValue?: string;
  }) => (
    <label className={`block ${full ? "md:col-span-2" : ""}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={5}
          required={required}
          defaultValue={defaultValue}
          className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-ink"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          defaultValue={defaultValue}
          className="mt-2 w-full border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-ink"
        />
      )}
      {errors[name] && <span className="mt-1 block text-[12px] text-brand">{errors[name]}</span>}
    </label>
  );

  return (
    <div className="bg-surface p-7 ring-1 ring-line md:p-10">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-line pb-5">
        <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em]">{labels.title}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          {t("Respons < 24 jam", "Reply < 24h")}
        </span>
      </div>

      {status === "ok" ? (
        <div className="border border-line bg-surface-alt p-8 text-center">
          <h4 className="text-[20px] font-bold">{t("Terima kasih.", "Thank you.")}</h4>
          <p className="mt-2 text-[14px] text-ink-soft">
            {t(
              "Spesialis kami akan menghubungi Anda dalam 1 hari kerja.",
              "Our specialists will contact you within 1 business day.",
            )}
          </p>
        </div>
      ) : (
        <form className="grid gap-6 md:grid-cols-2" onSubmit={onSubmit} noValidate>
          <Field name="name" label={t("Nama Lengkap", "Full Name")} />
          <Field name="company" label={t("Perusahaan", "Company")} />
          <Field name="position" label={t("Jabatan", "Position")} required={false} />
          <Field name="industry" label={t("Industri", "Industry")} required={false} />
          <Field name="email" label="Email" type="email" />
          <Field name="phone" label={t("Telepon / WhatsApp", "Phone / WhatsApp")} type="tel" />
          <Field
            name="interest"
            label={t("Produk / Layanan Diminati", "Product / Service Interest")}
            required={false}
            full
            defaultValue={preFilledInterest}
          />
          <Field name="message" label={t("Pesan", "Message")} as="textarea" full />
          <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
            <p className="text-[12px] text-ink-soft">
              {t(
                "Data Anda hanya digunakan untuk merespons pertanyaan ini.",
                "Your data is only used to respond to this inquiry.",
              )}
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand/90"
            >
              {labels.cta}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
