/* eslint-disable react/no-unescaped-entities */
import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import type { IconType } from "react-icons";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Button } from "../components/atoms";
import { ProjectList } from "../components/organisms";
import type { SEOProps } from "../components/seo";
import SEO from "../components/seo";
import { TimelineSection } from "../components/organisms";


type SocialMediaType = {
  icon: IconType;
  url: string;
  title: string;
}

function Home() {
  const SEOData: SEOProps = {
    title: "Andrian Fadhilla (andrianfaa) - Front-End Web Developer",
    description: "I'm a User Interface Designer and also a Front-End Developer based in Bekasi, Indonesia. I Love to create beautiful and functional user interfaces using React.js.",
    url: "https://www.andriann.co",
    keywords: [
      "Andrian Fadhilla",
      "andrianfaa",
      "user interface designer",
      "UI designer",
      "front-end developer",
      "front-end web developer",
      "bekasi",
      "indonesia",
      "react",
      "react.js",
    ],
  };

  const socialMediaLinks: SocialMediaType[] = [
    {
      icon: IoLogoDiscord,
      url: "https://github.com/TheSelected",
      title: "Github",
    },
    {
      icon: IoLogoTwitter,
      url: "https://twitter.com/TheSelected",
      title: "Twitter",
    },

  ];

  return (
    <div className="fade-in">
      <SEO data={SEOData} />
      <div className=" ">
      </div>
      <div className="text-center bg-base text-white py-20 px-6">
        <h1 className="text-4xl font-display">The first <span className="text-cyan-300">Fully Decentralised Project </span> Using Blockchain Technology.<br />
          Connecting communities to create self governed projects.
        </h1>

 

      </div>
      <div className="text-center bg-base text-base py-2 px-2">
 

           
      <li >Each nft holder is given a percentage all profits from the projects they are involved in.</li>
      <li  >
        25% of profits will be given to a "treasury wallet" to help fund the project for each drop.
      </li>
      <li  >
        All descions will be chosen via polls within the collection community
      </li>

      </div>
      {/*    
      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}


 
       
      <br />
      {/* <li  >
        Each project will be assigned an "Overseerer". They will have no involvment in the project itself but will be in charge of authorisating payments from the treasury.<br/> Whilst also aiding to maintain the community and any issues that arise within it. 
        </li> */}

      {/* <ul className="list-disc">
       <li className="list-disc">
        Each Project is assigned an "Overseerer". They have no involvment in the project and will act as a third party intermidatary. This is to ensure fairness of all participants
        </li>
       <li className="list-disc">
        Each nft holder is given a percentage all profits from the projects they are involved in
        </li>
        <li className="list-disc">
        25% of profits will be given to a "treasury wallet" to help fund the project for each drop.
        </li>
        <li className="list-disc">
        All descions will be chosen via polls from involvment of the whole community
        </li>
       </ul>   */}



      <div className="ml-2 w-8/12 p-6 justify-center">
        <TimelineSection />
      </div>
    </div>
  );
}

export default Home;
