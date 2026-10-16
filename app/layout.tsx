import type { Metadata } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Archivo({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Take Care Property Services | Lawn Care, Yard Clean-ups & Property Maintenance in Grimsby, Beamsville & Vineland",
  description:
    "Licensed and insured lawn care, yard clean-ups, hedging, small tree work, planting, power washing, patio stones and small painting jobs in Grimsby, Beamsville, Vineland and west Niagara. Owner Chris. 5.0 from 17 Google reviews. Call (289) 407-2325.",
  openGraph: {
    title: "Take Care Property Services | Property Maintenance in West Niagara",
    description: "Same-day property care from Chris in Grimsby, Beamsville and Vineland. Licensed & insured. 5.0 from 17 Google reviews. Call (289) 407-2325.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
