import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naman Sharma',
  description: 'Passionate software developer specializing in full-stack development, crafting scalable web applications, and leveraging modern technologies like JavaScript, React, Node.js, and cloud databases to deliver seamless user experiences.',
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-100 to-blue-100`}>
        <div className="flex min-h-screen">
          {children}
        </div>
          <Toaster/>
      </body>
    </html>
  )
}

