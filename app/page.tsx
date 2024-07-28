import Image from "next/image";
import Navbar from "./components/Navbar";
import headerImg from '../public/header.png'
import bgHeader from '../public/bg-header.png'
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="">
      <Navbar floating />
      <section className="relative pt-[90px]">
        <Image src={bgHeader} className="absolute z-0 w-full h-full left-0 top-0 object-cover opacity-50" alt="Header Image" />
        <div className="flex justify-between items-center lg:gap-10 py-16 relative z-10 container">
          <div className="w-1/2">
            <h1 className="text-5xl font-urban font-light mb-6">May Beauty Care</h1>
            <p className="mb-4 lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fugiat fugit molestiae magni accusamus amet
              ipsa iste aliquam, similique, ratione nulla ullam beatae non. Quae repellendus qui deleniti voluptatibus nisi?</p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="w-1/2 relative">
            <Image src={headerImg} alt="Header Image" />
          </div>
        </div>
      </section>
      <section className="container flex justify-between py-20 items-center">
        <div>
          <h2 className="uppercase tracking-wider text-primary mb-4">About Us</h2>
          <h3 className="text-3xl text-primary font-bold font-urban">
            Lorem ipsum dolor sit <br /> amet consectetur.
          </h3>
        </div>
        <p className="text-center lg:max-w-[450px]">
          Lorem ipsum dolor sit amet consectetur. Id semper fusce massa sit at auctor magnis.
          Purus ornare accumsan diam morbi magna. Lorem ipsum dolor sit amet consectetur.
        </p>
      </section>
      <Gallery />
      <section className="container flex justify-between items-center py-20">
        <div></div>
        <div className="text-right">
          <h2 className="uppercase tracking-wider text-primary mb-4">Products</h2>
          <h3 className="text-3xl text-primary font-bold font-urban mb-4">
            See the full list of our <br /> Products Catalogue
          </h3>
          <button className="btn-primary">See More</button>
        </div>
      </section>

      <section className="py-20">
        <h2 className="font-urban font-bold text-3xl text-center mb-6 text-primary">Visit Us</h2>
        <div>
          <iframe width="100%" height="600"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=May%20Beauty%20Care%20Citra%20Raya+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </div>
      </section>
      <Footer />
    </main>
  );
}
