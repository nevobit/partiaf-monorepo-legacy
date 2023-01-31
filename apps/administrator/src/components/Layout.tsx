import Header from "./Layout/Header";
import Navigation from "./Layout/Navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
    </>
  );
}
