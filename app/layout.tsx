import type { Metadata, Viewport } from "next";
import { Archivo, Karla } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoviWatermark from "@/components/layout/NoviWatermark";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { getMetadata, viewport as siteViewport, jsonLd } from "@/lib/metadata";
import "lenis/dist/lenis.css";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = getMetadata();

export const viewport: Viewport = siteViewport;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${karla.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>
          <Navbar />
          <div className="relative w-full bg-background">
            <div className="relative z-10 bg-background">
              {children}
              <Footer />
            </div>
            <NoviWatermark />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}