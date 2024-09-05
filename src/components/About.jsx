// import React from "react";
// import aboutImg from "../assets/images/about.png";
// const About = () => {
//   const info = [
//     { text: "Years experience", count: "04" },
//     { text: "Completed Projects", count: "24" },
//     { text: "Companies Work", count: "06" },
//   ];
//   return (
//     <section id="about" className="py-10 text-white">
//       <div className="text-center mt-8">
//         <h3 className="text-4xl font-semibold">
//           About <span className="text-cyan-600">Me</span>
//         </h3>
//         <p className="text-gray-400 my-3 text-lg">My introduction</p>
//         <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
//           <div className="p-2">
//             <div className="text-gray-300 my-3">
//               <p className="text-justify leading-7 w-11/12 mx-auto">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
//                 eos, quam vel quisquam, explicabo sit labore dignissimos optio
//                 ratione quibusdam doloribus pariatur consequuntur sint.
//                 Reprehenderit cupiditate possimus facere quasi voluptatem?
//               </p>
//               <div className="flex mt-10 items-center gap-7">
//                 {info.map((content) => (
//                   <div key={content.text}>
//                     <h3 className="md:text-4xl text-2xl font-semibold text-white">
//                       {content.count}
//                       <span className="text-cyan-600">+</span>{" "}
//                     </h3>
//                     <span className="md:text-base text-xs">{content.text}</span>
//                   </div>
//                 ))}
//               </div>
//               <br />
//               <br />
//               <a href="./src/assets/Code_a_program.pdf" download>
//                 <button className="btn-primary">Download CV</button>
//               </a>
//             </div>
//           </div>
//           <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
//             <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
//               <img
//                 src={aboutImg}
//                 alt=""
//                 className="w-full object-cover bg-cyan-600 rounded-xl"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import about from "../assets/images/about.png"; 

const About = () => {
  return (
    <section id="about" className="min-h-screen py-10 px-3 md:px-10 flex items-center">
      <div className="flex-1 md:mr-10">
        <h2 className="text-4xl font-bold text-white">About <span className="text-cyan-600">Me</span></h2>
        <p className="text-lg text-gray-600 mt-4">
          Hi, I'm Hema Puspa, a passionate Full Stack Developer with a keen interest in building scalable and efficient web applications, with strong foundational knowledge in frontend and backend technologies.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Beyond coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and continuously learning new skills. My goal is to become a versatile developer capable of handling all aspects of software development.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          I’m always open to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to <a href="#contact" className="text-cyan-600 underline">get in touch</a>!
        </p>
        <br />
          <a href="./src/assets/Hema Puspa J_Resume.pdf" download>
            <button className="btn-primary">Download CV</button>
          </a>
      </div>
      <div className="flex-1 flex justify-center md:ml-10 mt-10 md:mt-0">
        <img src={about} alt="Hema Puspa" className="w-11/11 h-[450px] max-w-sm rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
