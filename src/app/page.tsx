import Footer from "@/_components/Footer/Footer";
import Navbar from "@/_components/Navbar/Navbar";
import Hero from "@/_components/Hero/Hero";
import Familias from "@/_components/Footer/Familias/Familias";
import Produtos from "@/_components/Produtos/Produtos";
export default function Home() {
  return (
    <div data-theme="orthopedic" className="min-h-screen max-w-[2560px]">
      <Navbar />
      <Hero />
      <Familias />
      <div className=" sm:mx-18 mx-0 mt-8">
        <div className="border border-gray-200 w-full"></div>
      </div>
      <Produtos />
      <Footer />
    </div>
  );
}
