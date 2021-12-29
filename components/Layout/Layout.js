import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <main className="grid mt-2 md:mt-12 grow pb-6">{children}</main>
    </div>
  );
}
