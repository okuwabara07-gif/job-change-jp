import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Job Change', description: '転職・求人情報サイト' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}