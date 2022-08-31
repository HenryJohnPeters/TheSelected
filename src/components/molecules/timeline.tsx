/* eslint-disable @next/next/no-img-element */
import type { TimelineType } from "../../data";
import logo1 from'../../../public/Images/TheSelected.png'
import Image from 'next/image'

interface TimelineCardProps {
  data: TimelineType[];
}

function TimelineCard({
  data,
}: TimelineCardProps) {
  return (
    <>
    <h3>ROADMAP</h3>
    <br></br>
      {data.map(({
        id, title, date: datetime, description, location, url, logo,chain, chainDescription
      }: TimelineType) => (
        <li key={id} className="w-full ml-3 pl-6 md:pl-8 pb-6 sm:pb-8 last:pb-0 border-l border-black-700 relative">
          <div
            id="indicator"
            className={
              `absolute top-6 -left-1.5 w-3 h-3 rounded-full ${datetime.end.toLowerCase() === "present" ? "bg-cyan-300 ring-[6px] ring-primary ring-opacity-25" : "bg-black-500"}`
            }
          />
          <div>
          <Image
       
       src={logo1}
       alt="Picture of the author"
       width={100}
       height={100}
     />
            <h3 className="text-xl text-cyan-300 sm:text-2xl text-black-100 font-medium mb-4">
              {title}
            </h3>
            <a href={url} className="hover:text-black-100 text-white inline-block mb-2">
              Blockchain: {chain}
            </a>
            <p  >
              {chainDescription}
            </p>
            <p className="mb-4">
              {description}
            </p>

            <time className="text-sm text-black-100">
              {`${datetime.start}`}
            </time>
          </div>
        </li>
      ))}
     <span className="p-2">To be continued...</span>  
    </>
  );
}

export default TimelineCard;
