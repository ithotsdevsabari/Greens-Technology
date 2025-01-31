import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/Microsoft/MainBanner";
import CFeedback from "@/components/Microsoft/CFeadback";
import Modules from "@/components/Microsoft/Modules";

import CourseFee from "@/components/DataAnalytics/CourseFee";
import FaqNew from "@/components/Microsoft/FaqNew"; 
import Cta from "@/components/Microsoft/Cta";
import ProjectPortfolio from "@/components/DataAnalytics/ProjectPortfolio";
import MeetTheTeam from "@/components/DataAnalytics/MeetTheTeam";
import BookFreeDemo from "@/components/Microsoft/BookFreeDemo";
import Features from "@/components/DataAnalytics/Features";
import CareerAsst from "@/components/Microsoft/CareerAsst";
import FooterNew from "@/components/Layouts/FooterNew";
import TrainingProgram from "@/components/DataAnalytics/TrainingProgram";
import CaseStudies from "@/components/DataAnalytics/CaseStudies";
import Chart from "@/components/Microsoft/Chart";
import Disclaimer from "@/components/Microsoft/Disclaimer";
import SpecialOffer from "@/components/Microsoft/SpecialOffer";
import CareerAssest from "@/components/Common/CareerAssest";
import CourseDetails from "@/components/Microsoft/CourseDetails";

// import CaseStudies from "../../components/HomePages/StartupAgency/CaseStudies";

export default function Home() {
  return ( 
    <> 

      <Navbar />
 
      <MainBanner /> 
 
      <Chart /> 
  
      <BookFreeDemo/>

      <Modules /> 

      {/* <SpecialOffer /> */}

      <CourseDetails />

      <Disclaimer />

      <FaqNew />

      <div className="">
        <h2 className="text-uppercase text-center fs-20 mb-2 text-green">Scrum Master Certification Training Program Reviews</h2>
        <CFeedback />
      </div>

      <Cta/>

      {/* <CareerAsst /> */}
      <CareerAssest />

      <FooterNew />
   
    </>
  );
}
