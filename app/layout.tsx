import type { Metadata, Viewport } from "next";
import { Archivo, Karla } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
          <div className="relative w-full bg-[#f0f2f6]">
            <div className="relative z-10 bg-[#f0f2f6]">
              {children}
              <Footer />
            </div>
            <div className="sticky bottom-0 z-0 -mt-8 flex h-[40vh] w-full items-center justify-center overflow-hidden bg-[#101011]">
              <p className="pointer-events-none select-none text-center text-[190px] font-bold leading-none tracking-[-0.05em] text-zinc-400/20 sm:text-[260px] md:text-[340px]">
                novi
              </p>
            </div>
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