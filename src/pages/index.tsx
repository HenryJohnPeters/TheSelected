
import { GiTeamIdea } from "react-icons/gi"
import type { SEOProps } from "../components/seo";
import SEO from "../components/seo";
import { TimelineSection } from "../components/organisms";
 
function Home() {
  const SEOData: SEOProps = {
    title: "The Selected",
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

  return (
    <div className="fade-in">
      <SEO data={SEOData} />
      <div className="text-center bg-base text-white py-20 px-6">
        <h1 className="text-4xl font-display">The first <span className="text-cyan-300">Fully Decentralised Project </span> Using Blockchain Technology.<br />
          Connecting communities to create self governed projects.
        </h1>
        <div className="h-3 text-sm justify-center py-10 px-6 text-center text-gray-400">
          "One of the vices of the virtue of decentralization is that people don't share ideas."<br /><span >Anthony J. F. O'Reilly</span>
        </div>
      </div>
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-black-900 shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex items-center   justify-center  rounded-md    text-cyan-300">
            <GiTeamIdea size={40} />
          </div>
          <h3 className="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            Meet the community
          </h3>
          <p className="text-md  text-white dark:text-gray-300 py-4">
            Holding an nft will allow access to its community. Each drop will have indivdual discord servers.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 bg-black-900 px-4 py-4 bg-black-900 shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0  ">
            <div className="flex items-center   justify-center  rounded-md  text-cyan-300 ">
              <GiTeamIdea size={40} />
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            Team up
          </h3>
          <p className="text-md  text-white dark:text-gray-300 py-4">
            Each memeber is assigned to a team of their choice dependant on their skill set.
            The goal of which is to create a product using the drops theme as a blueprint.<br /><br />
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6 bg-black-900 px-4 py-4 bg-black-900 shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0  ">
            <div className="flex items-center   justify-center  rounded-md   text-cyan-300">
              <GiTeamIdea size={40} />
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-white font-semibold dark:text-white py-4">
            Create something great
          </h3>
          <p className="text-md  text-white dark:text-gray-300 py-4">
            With help from each communties "Treasury Wallet" create something great. Each nft holder will liable to percentage of profits generated from the product. These percentages are decided by the community.
          </p>
        </div>
      </div>
      <div className="h-3 text-sm justify-center py-10 px-6 text-center text-gray-400">
        "Its true that contemporary technology permits decentralization, it also permits centralization. It depends on how you use the technology."<br /><span  >Noam Chomsky</span>
      </div>
      <div className="ml-2 w-8/12 p-6 justify-center ml-6">
        <TimelineSection />
      </div>
      <div className="text-center bg-base text-base py-2 px-2">
      </div>
    </div>
  );
}

export default Home;
