import { Wrapper } from "@/app/Wrapper";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import GenerateSection from "@/components/GenerateSection";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <Wrapper>
     <Hero />
     <GenerateSection/>
     <Gallery/>
     <Footer/>
    </Wrapper>
    
  );
}
