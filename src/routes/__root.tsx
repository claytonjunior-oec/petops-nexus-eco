import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#122952" },
      { title: "PetOps — O futuro da operação pet" },
      { name: "description", content: "Ecossistema para o mercado pet | Evolução tecnolócia" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PetOps" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@petops" },
      { property: "og:title", content: "PetOps — O futuro da operação pet" },
      { name: "twitter:title", content: "PetOps — O futuro da operação pet" },
      { property: "og:description", content: "Ecossistema para o mercado pet | Evolução tecnolócia" },
      { name: "twitter:description", content: "Ecossistema para o mercado pet | Evolução tecnolócia" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VXmVwj7LJWQEZk6O0fyHTD79fEU2/social-images/social-1779119105328-Screenshot_2026-05-18_124431.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/VXmVwj7LJWQEZk6O0fyHTD79fEU2/social-images/social-1779119105328-Screenshot_2026-05-18_124431.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PetOps",
          url: "https://petops-nexus-eco.lovable.app",
          logo: "https://petops-nexus-eco.lovable.app/favicon.ico",
          description:
            "Ecossistema premium para petshops, clínicas, banho & tosa, daycare e hotel pet. Tecnologia que automatiza a operação + linha profissional de produtos de cuidado.",
          areaServed: "BR",
          sameAs: [
            "https://www.instagram.com/petops",
            "https://www.linkedin.com/company/petops",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
