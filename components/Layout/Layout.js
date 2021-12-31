import Head from 'next/head';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Planets</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col justify-center min-h-screen">
        <Header />
        <main className="grid mt-2 md:mt-12 grow pb-6">{children}</main>
      </div>
    </>
  );
}
