import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import AuthContext from '@/context/AuthContext'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: {
    default: 'Fasion Gather',
    template: `%s | Fasion Gather`,
  },
  description: 'Manage event',
  verification: {
    google: "google-site-verification=123321123"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthContext>
          <Toaster
            toastOptions={{
              style: {
                background: 'rgb(51 65 85',
                color: '#fff'
              }
            }}
          />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
