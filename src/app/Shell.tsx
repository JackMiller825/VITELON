import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";
import { ScrollManager } from "../components/ScrollManager.tsx";

export function Shell() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <ScrollManager />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
