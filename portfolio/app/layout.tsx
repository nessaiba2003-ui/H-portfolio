import type { Metadata } from 'next';
import './globals.css';
import './themes.css';
export const metadata: Metadata = {
  icons: { icon: '/icon.svg' },
  title: 'Hamza El Bahi — Photographer, Videographer & Astronomy',
  description:
    'Capturing Earth. Exploring the sky. The visual universe of Hamza El Bahi: photography, film and astronomy.',
  openGraph: {
    title: 'Hamza El Bahi — A visual universe',
    description: 'Capturing Earth. Exploring the sky.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Hamza El Bahi — A visual universe',
    description: 'Photography, film and astronomy.',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var light=localStorage.getItem('hamza-theme-v1')==='light';document.documentElement.classList.toggle('light',light);document.documentElement.classList.toggle('dark',!light);}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
