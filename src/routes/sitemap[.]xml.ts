import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const solutions = [
          "h2s",
          "connected-safety",
          "emergency-response",
          "gas-detection",
          "consulting",
        ];
        const products = [
          "inet",
          "safer-one",
          "ventis-pro5",
          "radius-bz1",
          "tango-tx1",
          "mx6-ibrid",
        ];
        const industries = [
          "oil-gas",
          "petrochemical",
          "refinery",
          "lng",
          "mining",
          "manufacturing",
        ];

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/solutions", changefreq: "monthly", priority: "0.9" },
          { path: "/products", changefreq: "monthly", priority: "0.9" },
          { path: "/industries", changefreq: "monthly", priority: "0.8" },
          { path: "/resources", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" },
          ...solutions.map((s) => ({
            path: `/solutions/${s}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...products.map((p) => ({
            path: `/products/${p}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...industries.map((i) => ({
            path: `/industries/${i}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
