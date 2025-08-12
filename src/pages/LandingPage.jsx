import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
// ... qui scrivete import per altri componenti

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