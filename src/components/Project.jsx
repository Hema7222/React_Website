// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import hotelapp from "../assets/images/hotelapp.png";
// import weather from "../assets/images/weather.png";
// import qrcode from "../assets/images/qrcode.png";
// import project from "../assets/images/project.jpg";
// import project4 from "../assets/images/project-4.jpg";
// import project5 from "../assets/images/project-5.png";
// import project_person from "../assets/images/project_person1.png";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

// const Project = () => {
//   const projects = [
//     {
//       img: hotelapp,
//       name: "Hotel Reservation App",
//       github_link: "https://github.com/Hema7222/MERN-PROJECT",
//     },
//     {
//       img: weather,
//       name: "Weather App",
//       github_link: "https://github.com/Hema7222/weather",
//       live_link: "https://hema-weather.vercel.app/",
//     },
//     {
//       img: qrcode,
//       name: "QR-Code Generator",
//       github_link: "https://github.com/Hema7222/qr-code_Generator",
//       live_link: "https://qr-code-generator-tau-five.vercel.app/",
//     },
//     // {
//     //   img: project4,
//     //   name: "React Nav",
//     //   github_link:
//     //     "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
//     //   live_link: "https://reacttailwindnavbar.netlify.app",
//     // },
//     // {
//     //   img: project5,
//     //   name: "Vue Country",
//     //   github_link: "https://github.com/Sridhar-C-25",
//     //   live_link: "https://vuecountry05.netlify.app",
//     // },
//   ];
//   return (
//     <section id="projects" className="py-10 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Projects</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
//       </div>
//       <br />
//       <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
//         <div className="lg:w-2/3 w-full">
//           <Swiper
//             slidesPerview={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               768: {
//                 slidesPerView: 2,
//               },
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Autoplay]}
//           >
//             {projects.map((project_info, i) => (
//               <SwiperSlide key={i}>
//                 <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
//                   <img src={project_info.img} alt="" className="rounded-lg" />
//                   <h3 className="text-xl my-4">{project_info.name}</h3>
//                   <div className="flex gap-3">
//                     <a
//                       href={project_info.github_link}
//                       target="_blank"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Github
//                     </a>
//                     <a
//                       href={project_info.live_link}
//                       target="_blank"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="lg:block hidden">
//           <img src={project} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;





// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import hotelapp from "../assets/images/hotelapp.png";
// import weather from "../assets/images/weather.png";
// import qrcode from "../assets/images/qrcode.png";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";

// const Project = () => {
//   const projects = [
//     {
//       img: hotelapp,
//       name: "Hotel Reservation App",
//       github_link: "https://github.com/Hema7222/MERN-PROJECT",
//     },
//     {
//       img: weather,
//       name: "Weather App",
//       github_link: "https://github.com/Hema7222/weather",
//       live_link: "https://hema-weather.vercel.app/",
//     },
//     {
//       img: qrcode,
//       name: "QR-Code Generator",
//       github_link: "https://github.com/Hema7222/qr-code_Generator",
//       live_link: "https://qr-code-generator-tau-five.vercel.app/",
//     },
//   ];

//   return (
//     <section id="projects" className="py-10 text-white">
//       <div className="text-center">
//         <h3 className="text-4xl font-semibold">
//           My <span className="text-cyan-600">Projects</span>
//         </h3>
//         <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
//       </div>
//       <br />
//       <div className="flex max-w-5xl gap-6 px-5 mx-auto items-center">
//         <div className="lg:w-full w-full">
//           <Swiper
//             slidesPerview={1.2}
//             spaceBetween={20}
//             breakpoints={{
//               768: {
//                 slidesPerView: 2,
//               },
//             }}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Autoplay]}
//           >
//             {projects.map((project_info, i) => (
//               <SwiperSlide key={i}>
//                 <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
//                   <img src={project_info.img} alt="" className="rounded-lg" />
//                   <h3 className="text-xl my-4">{project_info.name}</h3>
//                   <div className="flex gap-3">
//                     <a
//                       href={project_info.github_link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                     >
//                       Github
//                     </a>
//                     {project_info.live_link && (
//                       <a
//                         href={project_info.live_link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
//                       >
//                         Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;





import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hotelapp from "../assets/images/hotelapp.png";
import weather from "../assets/images/weather.png";
import qrcode from "../assets/images/qrcode.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Adjusted import

const Project = () => {
  const projects = [
    {
      img: hotelapp,
      name: "Hotel Reservation App",
      github_link: "https://github.com/Hema7222/MERN-PROJECT",
    },
    {
      img: weather,
      name: "Weather App",
      github_link: "https://github.com/Hema7222/weather",
      live_link: "https://hema-weather.vercel.app/",
    },
    {
      img: qrcode,
      name: "QR-Code Generator",
      github_link: "https://github.com/Hema7222/qr-code_Generator",
      live_link: "https://qr-code-generator-tau-five.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-5xl gap-6 px-5 mx-auto items-center">
        <div className="lg:w-full w-full">
          <Swiper
            slidesPerView={1.2} // Fixed typo: slidesPerview -> slidesPerView
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
