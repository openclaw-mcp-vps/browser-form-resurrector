import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Form Resurrector — Never lose form data again',
  description: 'Browser extension that automatically saves form inputs and restores them after crashes, accidental navigation, or timeouts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96a5ded8-ea04-4481-aeda-45caa92072c7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
