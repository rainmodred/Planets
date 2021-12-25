import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <main className="grow">{children}</main>
    </div>
  );
}
