import React from "react";
import "./Sectionfive.css";

import Circle from "../../components/Circle/Circle";
const Sectionfive = () => {
  const course = [
    {
      name: "MemeState",
      about:
        "Secure $GEMS at exclusive presale pricing and maximize your ROI while powering the first sustainable P2E model, merging fun and financial potential.",
      image: "/images/memestateweb.png",
      link: "https://memestateweb.vercel.app/",
      liveLink: "https://www.memestate.com/",
      toolsUsed: [
        {
          img: "/images/vite.svg",
          text: "React",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },

        {
          img: "/images/gsap-logo.jpg",
          text: "Gsap",
        },
      ],
      status: "In Progress",
      isLive: true,
      rowForm: "row-reverse",
    },
    {
      name: "Cashtella",
      about:
        "Enabling businesses to perform timely local and cross-border payments",
      image: "/images/cashtella.png",
      link: "https://cashtella.vercel.app/",
      liveLink: "https://cashtella.com/",

      toolsUsed: [
        {
          img: "/images/react.svg",
          text: "React",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/tanstack.png",
          text: "TanStack",
        },
        {
          img: "/images/f.svg",
          text: "Framer Motion",
        },
      ],
      status: "Completed",
      isLive: true,

      rowForm: "row",
    },
    {
      name: "Frontters",
      about:
        " At Frontters, we are dedicated to revolutionizing the way individuals find jobs and companies discover talent. Our platform serves as a dynamic hub connecting job seekers with diverse opportunities and employers with top-tier talent. With a user-friendly interface and powerful search tools, we empower job seekers to explore a vast array of career prospects, while providing employers with innovative recruitment solutions to streamline their hiring process.",
      image: "/images/frontters.png",
      link: "https://frontters.netlify.app/",
      liveLink: "https://frontters.com/",

      toolsUsed: [
        {
          img: "/images/react.svg",
          text: "React",
        },
        {
          img: "/images/scss.svg",
          text: "Scss",
        },

        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
        {
          img: "/images/js.svg",
          text: "Javascript ",
        },
      ],
      status: "v1 completed",
      isLive: true,

      rowForm: "row-reverse",
    },

    {
      name: "Amobren",
      about:
        "Explore our in-depth articles, expert reviews, and comprehensive guides on everything from cutting-edge software and hardware to groundbreaking ",
      image: "/images/amobren-web-1.png",
      link: "https://main--amobrenss.netlify.app/",
      liveLink: "https://cass.amobern.com/auth/sign-in",
      toolsUsed: [
        {
          img: "/images/vite.svg",
          text: "Vite",
        },

        {
          img: "/images/css.svg",
          text: "CSS 3",
        },

        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
        {
          img: "/images/f.svg",
          text: "Framer Motion",
        },
      ],
      status: "In Progress",
      rowForm: "row-reverse",
      isLive: true,
    },
    {
      name: "CasaUx",
      about:
        "At casa-ux boot camp community, we are dedicated to fostering a supportive and empowering environment for individuals on their journey towards personal and professional growth. Through collaborative learning, hands-on experiences, and mentorship, we strive to equip our members with the skills, knowledge, and confidence needed to excel in their respective fields",
      image: "/images/casaux.png",
      link: "https://casaux.netlify.app",
      toolsUsed: [
        {
          img: "/images/vite.svg",
          text: "React",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/ty.svg",
          text: "TypeScript",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
        {
          img: "/images/f.svg",
          text: "Framer Motion",
        },
      ],
      status: "In Progress",
      rowForm: "row",
    },

    // {
    //   name: "Imole",
    //   about:
    //     " Welcome to  Imole, where sustainable energy meets convenience! Explore our wide range of high-quality solar panels, designed to harness the power of the sun and reduce your carbon footprint. ",
    //   link: "https://funny-dragon-933d14.netlify.app/",
    //   image: "/images/imole.png",

    //   toolsUsed: [
    //     {
    //       img: "/images/vite.svg",
    //       text: "React",
    //     },
    //     {
    //       img: "/images/css.svg",
    //       text: "CSS 3",
    //     },

    //     {
    //       img: "/images/b.svg",
    //       text: "Bootstarp 5",
    //     },
    //     {
    //       img: "/images/ty.svg",
    //       text: "TypeScript",
    //     },
    //   ],
    //   status: "v1 completed",
    //   rowForm: "row-reverse",
    // },

    {
      name: "Speech Converter ",
      about: " Convert any Text you write to a speech",
      image: "/images/speech.png",
      link: "https://speechconverter-d.netlify.app/",
      toolsUsed: [
        {
          img: "/images/html.svg",
          text: "HTML 5",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/js.svg",
          text: "Javascript ",
        },
      ],
      status: "Completed",
      rowForm: "row-reverse",
    },

    {
      name: "First Bank Application Hub",
      about:
        " Document Management System (DMS) is a software solution used to organize, manage, and track electronic documents and images of paper-based information. It facilitates document capture, storage, retrieval, sharing, and collaboration within the organization.",
      image: "/images/firstbank.png",
      link: "https://iridescent-syrniki-a42ca9.netlify.app/#",
      toolsUsed: [
        {
          img: "/images/html.svg",
          text: "HTML 5",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/js.svg",
          text: "Javascript ",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
      ],
      status: "v1 completed",
      rowForm: "row",
    },
    // {
    //   name: 'FCMB WORKFLOW',
    //   about:
    //     ' Document Management System (DMS) is a software solution used to organize, manage, and track electronic documents and images of paper-based information. It facilitates document capture, storage, retrieval, sharing, and collaboration within the organization.',
    //   image: '/images/fcmb.png',
    //   link: 'https://fcmb-dns.netlify.app/',
    // },
    // {
    //   name: 'Ecowas',
    //   about:
    //     'This project enhance collaboration, streamline processes, improve information management, and facilitate effective decision-making within the ECOWAS organization.',
    //   image: '/images/ecowasng.png',
    //   link: 'https://ecowasng.netlify.app',
    // },
    // {
    //   name: 'E-Library',
    //   about:
    //     ' Document Management System (DMS) is a software solution used to organize, manage, and track electronic documents and images of paper-based information. It facilitates document capture, storage, retrieval, sharing, and collaboration within the organization.',
    //   image: '/images/e-library.png',
    //   link: 'https://golden-shortbread-bf576d.netlify.app',
    // },

    // {
    //   name: "OWNERSHIP",
    //   about:
    //     " Welcome to our comprehensive real estate platform, your one-stop destination for all your property needs! Whether you're looking to rent a house, sell land, buy a new home, or list your property for sale, we've got you covered. With a user-friendly interface and a vast database of listings, finding your dream property has never been easier",
    //   image: "/images/houseed.png",
    //   link: "https://houseed.netlify.app",
    //   toolsUsed: [
    //     {
    //       img: "/images/html.svg",
    //       text: "HTML 5",
    //     },
    //     {
    //       img: "/images/css.svg",
    //       text: "CSS 3",
    //     },
    //     {
    //       img: "/images/js.svg",
    //       text: "Javascript ",
    //     },
    //     {
    //       img: "/images/b.svg",
    //       text: "Bootstarp 5",
    //     },
    //   ],
    //   status: "Completed",
    //   rowForm: "row-reverse",
    // },
    {
      name: "Netlify Clone",
      about:
        " Welcome to our comprehensive real estate platform, your one-stop destination for all your property needs! Whether you're looking to rent a house, sell land, buy a new home, or list your property for sale, we've got you covered. With a user-friendly interface and a vast database of listings, finding your dream property has never been easier",
      image: "/images/movie.png",
      link: "https://movie-app-sigma-nine.vercel.app/login",
      toolsUsed: [
        {
          img: "/images/nextjs14.png",
          text: "Next JS",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/js.svg",
          text: "Javascript",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
      ],
      status: "Completed",
      rowForm: "row",
    },

    {
      name: "Cyber Girls Sec ",
      about:
        "The CyberGirls Fellowship is a free 1-year fellowship program that equips girls and women aged 18–28 years old with globally sought-after cybersecurity skills, positioning them to start a career in cybersecurity and helping them to seize decent work opportunities within Africa and across the world.",
      image: "/images/cbg.png",
      link: "https://meek-malabi-03606e.netlify.app",
      toolsUsed: [
        {
          img: "/images/html.svg",
          text: "HTML 5",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/js.svg",
          text: "Javascript ",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
      ],
      status: "Completed",
      rowForm: "row-reverse",
    },
    {
      name: "Let's Travel",
      about:
        "A Travel Companion That give you the Best Resturnats, Hotels and Attractions in the world",
      image: "/images/let_travel.png",
      link: "https://voluble-torte-ae20a3.netlify.app",
      toolsUsed: [
        {
          img: "/images/vite.svg",
          text: "React",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/ty.svg",
          text: "TypeScript",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
      ],
      status: "v1 completed",
      rowForm: "row",
    },
    {
      name: "MTN CAMEROUN ",
      about: " An interactive enviroment for mtn  cameroun staffs",
      image: "/images/mtncamerron.png",
      link: "https://mtncameroon.netlify.app/",
      toolsUsed: [
        {
          img: "/images/html.svg",
          text: "HTML 5",
        },
        {
          img: "/images/css.svg",
          text: "CSS 3",
        },
        {
          img: "/images/js.svg",
          text: "Javascript ",
        },
        {
          img: "/images/b.svg",
          text: "Bootstarp 5",
        },
      ],
      status: "Completed",
      rowForm: "row-reverse",
    },

    // {
    //   name: 'POC ',
    //   about:
    //     'This  application provides a centralized platform for managing documents and tracking their verification status, streamlining the document verification process and improving efficiency.',
    //   image: '/images/poc.png',
    //   link: 'https://poc-net.netlify.app/',
    //   toolsUsed: [
    //     {
    //       img: '/images/html.svg',
    //       text: 'HTML 5',
    //     },
    //     {
    //       img: '/images/css.svg',
    //       text: 'CSS 3',
    //     },
    //     {
    //       img: '/images/js.svg',
    //       text: 'Javascript ',
    //     },
    //     {
    //       img: '/images/b.svg',
    //       text: 'Bootstarp 5',
    //     },
    //   ],
    //   status: 'Completed',
    // },
  ];

  return (
    <div className="sectionfour-con py-5">
      <div className="project_container">
        {course.map((course) => (
          <div
            className="row my-5 project_row"
            style={{ flexDirection: `${course.rowForm}` }}
          >
            <div className="col-lg-6">
              <div className="about_project_con">
                <p className="poppins-regular">Featured Project</p>
                <div className="row">
                  <h4 className="poppins-regular d-flex col-lg-8">
                    {course.name}
                  </h4>
                  <div className="col-lg-4 d-flex gap-2 ">
                    {course.isLive ? (
                      <a
                        href={course.liveLink}
                        target="_blank"
                        className="status d-flex align-item-center gap-3  "
                        style={{ background: "white" }}
                      >
                        <span style={{ color: "black" }}>Live</span>
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                          >
                            <circle
                              cx="24"
                              cy="24"
                              r="6"
                              fill="#f44336"
                            ></circle>
                            <path
                              fill="#f44336"
                              d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"
                            ></path>
                            <path
                              fill="#f44336"
                              d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"
                            ></path>
                            <g>
                              <path
                                fill="#f44336"
                                d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"
                              ></path>
                              <path
                                fill="#f44336"
                                d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </a>
                    ) : (
                      ""
                    )}

                    <div className="status ">{course.status}</div>
                  </div>
                </div>

                <div className="glass_card mt-5">
                  <p>{course.about}</p>
                </div>
              </div>

              <div className="row my-4">
                {course.toolsUsed?.map((tool) => (
                  <div className="col-2">
                    <Circle img={tool.img} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <a href={course.link} className="project_img" target="_blank">
                <img src={course.image} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectionfive;
