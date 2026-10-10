import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arieljulytraje.com"), // ← CHANGE to your real domain
  title: {
    default:
      "Ariel July Traje — Full-Stack Web Developer | Magna Cum Laude BSIT",
    template: "%s | Ariel July Traje",
  },
  description:
    "Ariel July Traje is a Full-Stack Web Developer from Davao City, Philippines. BSIT Magna Cum Laude graduate from the University of Mindanao specializing in Laravel, React, Next.js, Python, and automation. Available for hire.",
  keywords: [
    "Ariel July Traje",
    "Ariel Traje",
    "Full-Stack Developer Philippines",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "BSIT Magna Cum Laude",
    "University of Mindanao",
    "Davao Web Developer",
    "Filipino Full-Stack Developer",
    "Python FastAPI Developer",
    "Automation Engineer",
  ],
  authors: [{ name: "Ariel July Traje", url: "https://arieljulytraje.com" }],
  creator: "Ariel July Traje",
  publisher: "Ariel July Traje",
  category: "Technology",
  classification: "Web Development Portfolio",

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arieljulytraje.com",
    title: "Ariel July Traje — Full-Stack Web Developer",
    description:
      "BSIT Magna Cum Laude from University of Mindanao. Building scalable web apps with Laravel, React, and Python.",
    siteName: "Ariel July Traje Portfolio",
    images: [
      {
        url: "/assets/images/og-image.png", // ← Create a 1200x630 preview image
        width: 1200,
        height: 630,
        alt: "Ariel July Traje — Full-Stack Web Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ariel July Traje — Full-Stack Web Developer",
    description: "BSIT Magna Cum Laude • Laravel • React • Python • Automation",
    images: ["/assets/images/profile.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  // },

  alternates: {
    canonical: "https://arieljulytraje.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ariel July Traje",
              alternateName: "Ariel Traje",
              url: "https://arieljulytraje.com",
              image: "https://arieljulytraje.com/assets/images/profile.png",
              jobTitle: "Full-Stack Web Developer",
              description:
                "Full-Stack Web Developer and BSIT Magna Cum Laude graduate from the University of Mindanao, specializing in Laravel, React, Next.js, and Python.",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "University of Mindanao",
              },
              knowsAbout: [
                "Full-Stack Development",
                "Laravel",
                "React",
                "Next.js",
                "Python",
                "FastAPI",
                "PostgreSQL",
                "MySQL",
                "DevOps",
                "Automation",
                "Cybersecurity",
              ],
              sameAs: [
                "https://github.com/arieljuly",
                "https://www.linkedin.com/in/ariel-july-traje-a6187b2a1/",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Davao City",
                addressCountry: "PH",
              },
              award: "Magna Cum Laude — BS Information Technology",
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "ASEAN Data Science Explorers",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Cybersecurity Essentials",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Networking Essentials",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Java Programming",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Database Management",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
