import "./globals.css";

const SITE_URL = "https://campuspe.com";
const SITE_NAME = "CampusPe";
const TITLE = "CampusPe — Connect 10X Faster";
const DESCRIPTION =
  "One platform connecting students, colleges & employers — faster. AI-powered job matching, college discovery, and campus hiring in one place.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${SITE_NAME}` },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

// Only factual, visible-on-page fields — no invented ratings, jobs, or reviews.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          next/font/google + Turbopack fails to resolve Google Fonts in this
          Next.js version ("next/font/google queries have exactly one entry",
          reproduces on a clean prod build with no cache). Loading the fonts
          the same way the reference production site (Auto-Apply) does —
          a plain stylesheet link — sidesteps that broken build path.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;500;600;700;900&family=Lora:wght@700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Roboto:wght@700&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
