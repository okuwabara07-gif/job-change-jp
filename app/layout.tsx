import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '転職ノート',
  description: '転職・キャリアアップ情報',
  keywords: '転職ノート,転職・キャリアアップ情報',
  openGraph: {
    title: '転職ノート',
    description: '転職・キャリアアップ情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: '転職ノート',
  },
  twitter: {
    card: 'summary_large_image',
    title: '転職ノート',
    description: '転職・キャリアアップ情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "転職ノート", "description": "転職・キャリアアップ情報", "url": "https://job-change-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://job-change-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
