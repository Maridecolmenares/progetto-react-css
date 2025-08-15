import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import TextBlock from '../components/TextBlock/TextBlock';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock';
import CTABanner from '../components/CTABanner/CTABanner';
import ContactForm from'../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero title="Titolo Principale" />
        <TextBlock id="about"  />
        <ImageBlock />
        <ImageTextBlock id="gallery"  />
        <CTABanner />
        <ContactForm id="contact" />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;