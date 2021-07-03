import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/landing/Header";
import WorkingSection from "components/landing/WorkingSection";
// import TeamSection from 'components/landing/TeamSection';
// import ContactSection from 'components/landing/ContactSection';

export default function Landing() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header
          title={"CHOOSE YOUR FAV CATEGORY"}
          subheading={` This is a simple example of a Landing Page you
                                can build using Material Tailwind. It features
                                multiple components based on the Tailwind CSS
                                and Material Design by Google.`}
        />
        <WorkingSection />
        {/* <TeamSection /> */}
        {/* <ContactSection /> */}
      </main>
      <DefaultFooter />
    </>
  );
}
