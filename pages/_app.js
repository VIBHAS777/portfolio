import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const title = "Vibhas Reddy Araveeti | AI/ML & Clinical AI Researcher";
  const description =
    "Academic research portfolio of Vibhas Reddy Araveeti — AI/ML & Clinical AI Researcher and CS undergraduate at Amrita Vishwa Vidyapeetham with 12+ peer-reviewed publications.";
  const avatar = "/assets/vibhas_face.png";
  const url = "https://portfolio-vibhasf17-4811.vercel.app";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={avatar} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@VIBHAS777" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={avatar} />

        <link rel="canonical" href={url} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/assets/icons/favicon/site.webmanifest" />

        {/* Google Fonts: DM Sans & Playfair Display */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Theme init script to default to light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              var theme = localStorage.getItem('theme-v2');
              if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
              } else {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();`,
          }}
        />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
