import Footer from './components/Footer';
import Header from './components/header/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-light-bg-secondary dark:bg-dark-bg-secondary'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
