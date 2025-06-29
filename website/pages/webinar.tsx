import NavBar from '../components/NavBar';
import WebinarHero from '../components/webinar/WebinarHero';
import WebinarDetails from '../components/webinar/WebinarDetails';
import WebinarAgenda from '../components/webinar/WebinarAgenda';
import WebinarBenefits from '../components/webinar/WebinarBenefits';
import WebinarCTA from '../components/webinar/WebinarCTA';
import Footer from '../components/Footer';

export default function Webinar() {
  return (
    <div>
      <NavBar />
      <WebinarHero />
      <WebinarDetails />
      <WebinarAgenda />
      <WebinarBenefits />
      <WebinarCTA />
      <Footer />
    </div>
  );
} 