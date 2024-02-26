import Navbar from "../../components/Navbar";
import { Banner, ContactSections, ProfileSections, ProjectSections, SkillSections } from "../../containers";
import ServicesSection from "../../containers/ServicesSection";

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <ProfileSections/>
      <ServicesSection />
      {/* <SkillSections/>
      {/* <ProjectSections/>
      <ContactSections/> */}
    </div>
  );
};

export default LandingPage;
