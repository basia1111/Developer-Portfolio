import Header from './components/header/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-light-bg-primary dark:bg-dark-bg-primary'>
        <Header />
        {children}
      </body>
    </html>
  );
}
