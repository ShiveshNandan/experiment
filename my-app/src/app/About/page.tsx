import React from "react";
import Team from "./FeedBack";
import Navbar from "../navbar";

const About = () => {
  return (
    <>
    <Navbar params = "About"/>
    <div className="my-auto pt-[4vw] w-7/12 mx-auto text-gray-700 scroll-none snap-none ">
      <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black">About Us</h1>
      <p>
        Welcome to <span className="text-blue-600 font-semibold">Make Engineering Easy</span>, where we are committed to simplifying
        your academic journey. We understand the challenges that students face
        while navigating through their studies, and we are dedicated to
        providing comprehensive study materials that make learning a seamless
        and enjoyable experience.
      </p>

      <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black">Our Mission</h1>
      <p>
        At <span className="text-blue-600 font-semibold">Make Engineering Easy</span>, our mission is to empower students with the
        resources they need to excel in their academic endeavors. We strive to
        curate a diverse collection of past year question papers (PYQs),
        comprehensive study notes, and valuable lecture links, all carefully
        organized to support your learning process.
      </p>

      <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black">What We Offer</h1>
      <p className="mt-3">
      <span className="text-blue-600 font-semibold">Past Year Question Papers (PYQs):</span> Access a repository of meticulously
        compiled PYQs spanning various subjects and educational boards, enabling
        you to familiarize yourself with exam patterns and prepare effectively.
        </p>
        <p className="mt-3">
        <span className="text-blue-600 font-semibold">Comprehensive Study Notes:</span> Explore a rich assortment of well-researched
        study materials created by our team of experienced educators, designed
        to simplify complex concepts and facilitate a deeper understanding of
        your course material. 
        </p>
        <p className="mt-3">
        <span className="text-blue-600 font-semibold">Lecture Links:</span> Seamlessly integrate your learning
        experience with our carefully curated collection of lecture links from
        renowned educators, ensuring that you have access to valuable insights
        and explanations to supplement your studies.
      </p>

      <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black">Our Commitment</h1>
      <p>
        We are passionate about fostering a learning environment that encourages
        <span className="text-blue-600 font-semibold"> exploration, critical thinking, and academic excellence.</span> Our team is
        dedicated to continually enriching our platform with updated study
        resources and relevant materials, ensuring that you have everything you
        need to thrive academically. Join us at <span className="text-blue-600 font-semibold">Make Engineering Easy</span> and embark
        on a journey towards effortless learning and academic success. Should
        you have any questions or require further assistance, please feel free
        to reach out to us. We are here to support you every step of the way.
      </p>
      
      <Team/>
    </div>
    </>
  );
};

export default About;
