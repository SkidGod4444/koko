import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/layouts/header";
import { ThemeProvider } from "@/components/custom/theme.provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koko: Online Casino & Betting Platform - Play & Earn Guarenteed.",
  description:
    "koko.fun is the one and only legitmate gambling platform which gives you play & earn assurance guarenteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />

        {/* VERCEL LOGS */}
        <Analytics/>
      </body>
    </html>
  );
}
