import './globals.css';
import { nunito } from './ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased w-full`}>
        {children}
      </body>
    </html>
  );
}
