import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Navbar, ScreenSize } from '@/components';
import { Container, CssBaseline } from '@mui/material';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <CssBaseline />
          <Navbar />
          <main>
            <Container
              maxWidth='xl'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                maxHeight: '100%',
                justifyItems: 'center',
                alignItems: 'center',
              }}>
              {children}
            </Container>
          </main>
          <ScreenSize />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
