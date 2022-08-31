// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable no-nested-ternary */
// import { useState } from "react";
// import Link from "next/link";
// import type { IconType } from "react-icons";
// import { useRouter } from "next/router";
// import Button from "../atoms/button";
// import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
// type MenuType = {
//   title: string;
//   href: string;
//   animationDelay?: string;
//   openInNewTab?: boolean;
// }
// type SocialMediaType = {
//   icon: IconType;
//   url: string;
//   title: string;
// }

// function Navbar() {
//   const socialMediaLinks: SocialMediaType[] = [
//     {
//       icon: IoLogoDiscord,
//       url: "https://github.com/TheSelected",
//       title: "Github",
//     },
//     {
//       icon: IoLogoTwitter,
//       url: "https://twitter.com/TheSelected",
//       title: "Twitter",
//     },
 
//   ];
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const router = useRouter();

//   const handleClick = (path: string) => {
//     router.push(path);
//     setIsOpen(false);
//   };

//   const navbarMenu: MenuType[] = [
//     // {
//     //   title: "Home",
//     //   href: "/",
//     //   animationDelay: "250ms",
//     // },
//     // {
//     //   title: "Projects",
//     //   href: "/projects",
//     //   animationDelay: "500ms",
//     // },
//     // {
//     //   title: "Blog",
//     //   href: "https://andrianfaa.medium.com/",
//     //   openInNewTab: true,
//     //   animationDelay: "750ms",
//     // },
//     {
//       title: "About",
//       href: "/about",
//       animationDelay: "1000ms",
//     },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container px-6">
 
//         {/* <Link href="/" passHref>
//           <a className="navbar-brand" title={router.pathname !== "/" ? "Back to Home" : "Home"}>
//             @TheSelected
//           </a>
//         </Link> */}

//         <ul 
//           className={` navbar-menu ${isOpen ? "active" : ""}`}
//           role="menu"
//         >
//           {navbarMenu.map(({
//             href, title, animationDelay, openInNewTab,
//           }) => (
//             <li
//               key={title.toLowerCase()}
//               style={{
//                 animationDelay: `${animationDelay}`,
//               }}
//               className={`navbar-menu-item right-0 ${title.toLowerCase() === "home" ? "sm:hidden" : ""}`}
//             >
//               <Link href={href} passHref>
//                 <a
//                   onClick={() => handleClick(href)}
//                   className={router.pathname === href ? "active"
//                     : ""}
//                   title={openInNewTab ? `Open ${title} in new tab` : title}
//                   target={openInNewTab ? "_blank" : ""}
//                 >
//                   {title}
//                 </a>
//               </Link>
//             </li>
//           ))}
//                 {socialMediaLinks.map(({ title, url, icon }) => {
//             const Icon = icon;

//             return (
          
//                 <a
//                   href={url}
//                   className="navbar-brand right-0"
//                   title={title}
//                 >
//                   <Icon className="h-6 w-6 right-0" />
//                 </a>
            
//             );
//           })}
//         </ul>

//         <Button.Base
//           className={`navbar-toggler ${isOpen ? "active" : ""}`}
//           onClick={() => setIsOpen(!isOpen)}
//           title="Open menu"
//           aria-label="Open menu"
//           aria-expanded={isOpen}
//         >
//           <span className="navbar-toggler__icon" />
//           <span className="navbar-toggler__icon" />
//         </Button.Base>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { BsTwitter, BsDiscord} from 'react-icons/bs'

 
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

//   const socialMediaLinks: SocialMediaType[] = [
//     {
//       icon: IoLogoDiscord,
//       url: "https://github.com/TheSelected",
//       title: "Github",
//     },
//     {
//       icon: IoLogoTwitter,
//       url: "https://twitter.com/TheSelected",
//       title: "Twitter",
//     },
 
//   ];

export default function Example() {
  return (
    <div className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center     py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="text-size-4xl  text-gray-400 font-medium text-white hover:text-cyan-300">
          The Selected
            </a>
          </div>
        <div  className="hidden md:flex space-x-10">
        <a href="#" className="text-base font-medium text-white hover:text-cyan-300">
           < BsDiscord size ={30}/>
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-cyan-300">
           < BsTwitter size ={30}/>
            </a>
            
            <a href="#" className="text-base font-medium text-gray-500 hover:text-cyan-300">
            Top contributors
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-cyan-300">
              Coming Soon
            </a>
        
          </div>
        </div>
      </div>
    </div>
  )
}