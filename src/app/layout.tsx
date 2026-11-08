import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thebooklaunchcompany.com'),
  title: {
    default: 'The Book Launch Company — The New-Media Launch Partner for Authors',
    template: '%s | The Book Launch Company',
  },
  description:
    'Book launches, backlist revival, author content and podcasts. The new-media launch partner for authors — from launch day to lasting reader discovery.',
  keywords: [
    'book launch marketing',
    'book marketing agency',
    'BookTok marketing for authors',
    'author podcast production',
    'author branding',
    'backlist revival',
    'short-form video for books',
  ],
  authors: [{ name: 'The Book Launch Company', url: 'https://thebooklaunchcompany.com' }],
  creator: 'The Book Launch Company',
  publisher: 'The Book Launch Company',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://thebooklaunchcompany.com',
    title: 'The Book Launch Company — Launch the book. Build the author.',
    description:
      'Book launches, backlist revival, author content and podcasts. From launch day to lasting reader discovery.',
    siteName: 'The Book Launch Company',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'The Book Launch Company — The New-Media Launch Partner for Authors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Book Launch Company — Launch the book. Build the author.',
    description:
      'Book launches, backlist revival, author content and podcasts. From launch day to lasting reader discovery.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://thebooklaunchcompany.com/#organization',
      name: 'The Book Launch Company',
      url: 'https://thebooklaunchcompany.com/',
      logo: 'https://thebooklaunchcompany.com/favicon.svg',
      description:
        'The new-media launch partner for authors: book launches, backlist revival, author brand content, and author podcasts.',
      founder: {
        '@type': 'Person',
        name: 'Ariba',
        jobTitle: 'Founder & Creative Director',
        sameAs: 'https://instagram.com/whynotnovels',
      },
      sameAs: [
        'https://instagram.com/whynotnovels',
        'https://tiktok.com/@whynotnovels',
        'https://youtube.com/@whynotnovels',
        'https://linkedin.com/company/the-book-launch-company',
      ],
      areaServed: 'Worldwide',
      knowsAbout: [
        'Book Marketing',
        'BookTok Campaign Management',
        'Author Podcast Production',
        'Author Personal Branding',
        'Short-form Video Strategy',
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://thebooklaunchcompany.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How early should I get in touch before my release date?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ideally 8 to 12 weeks before release to allow ARC seeding, cover reveal buzz, and launch-week preparation. We also operate fast-turnaround campaigns for books already released through our Backlist Revival service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with self-published and indie authors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — independent authors, debut writers, traditionally published authors, and specialised overseas publishers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which genres do you specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our strongest organic traction is in Fiction, Thrillers & Mysteries, Romance & Romantasy, Sci-Fi & Fantasy, Historical Fiction, and select narrative Non-Fiction and Memoirs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you guarantee sales or bestseller status?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No ethical agency can guarantee algorithmic retail sales or specific bestseller rankings. What we guarantee is our work, tested creative hook execution, targeted reader reach, and transparent reporting.',
          },
        },
        {
          '@type': 'Question',
          name: 'What do you need from me as an author?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The book (or ARC), a short discovery call, and — for ongoing brand and podcast work — about an hour a week. For book launches and backlist revivals, our team handles scripting, editing, and creator coordination.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/switzer-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
