import { Inter } from 'next/font/google'
import '../globals.css'
import { useLocale } from 'next-intl';
import {notFound} from 'next/navigation';
 
// Can be imported from a shared config
const locales = ['en', 'es'];

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SRB Portfolio',
  description: 'Sergio Romero Burdalo portfolio',
}

export default function RootLayout({ children }) {
  // Validate that the incoming `locale` parameter is valid
  const locale = useLocale();
  if (!locales.includes(locale)) notFound();
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
