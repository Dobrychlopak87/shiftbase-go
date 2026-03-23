import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shiftbase | Profesjonalne zarządzanie czasem i projektami',
  description: 'Kompleksowa aplikacja do śledzenia czasu pracy, zarządzania projektami i generowania raportów. Działa offline, dbając o Twoją prywatność.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
