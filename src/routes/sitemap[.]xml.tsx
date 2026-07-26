import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://petops.org";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/tech", changefreq: "weekly", priority: "0.9" },
          { path: "/planos", changefreq: "weekly", priority: "0.9" },
          { path: "/sistema-para-petshop", changefreq: "weekly", priority: "0.9" },
          { path: "/sistema-banho-e-tosa", changefreq: "weekly", priority: "0.9" },
          { path: "/whatsapp-para-petshop", changefreq: "weekly", priority: "0.9" },
          { path: "/vale-a-pena", changefreq: "monthly", priority: "0.8" },
          { path: "/sobre", changefreq: "monthly", priority: "0.6" },
          { path: "/contato", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries
          .map((entry) =>
            [
              "  <url>",
              `    <loc>${BASE_URL}${entry.path}</loc>`,
              entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
              entry.priority ? `    <priority>${entry.priority}</priority>` : null,
              "  </url>",
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
          },
        });
      },
    },
  },
});
