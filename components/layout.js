import Navbar from "./navbar";
import Footer from "./footer";
import MenuModal from "./MenuModal";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <MenuModal />
        <Footer />
      </div>
    </>
  );
}
