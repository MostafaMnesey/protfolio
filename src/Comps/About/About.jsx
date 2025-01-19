import React from "react";

import "flowbite/dist/flowbite.css";

export default function About() {
  function editTitle(){
    document.title='About'
}
editTitle();
  return  <>
      <section className="bg-black">
        <div className="container mx-auto bg-black">
          <div className="home min-h-[100vh] flex flex-col items-center justify-center">
            <p>about component</p>
            <div className="content py-10">
              <h1 className="text-4xl text-center  text-white">
                About Component
              </h1>

              <p className="text-white py-10 relative text-center">
                <i
                  className="fa-solid fa-star px-[30px] after:w-[50%]  after:content-[''] md:after:w-[100%] after:top-[45%] after:right-[60%] after:h-1 after:absolute after:bg-white
                  "
                ></i>
                <span className=" after:w-[50%] after:content-[''] md:after:w-[100%] after:h-1 after:top-[45%] after:left-[60%] after:absolute after:bg-white"></span>
              </p>
              
            </div>
            <div className=" text-white text-lg grid grid-cols-1 md:grid-cols-2 text-center">
                <p className="px-10 py-8">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className="px-10 py-8">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  
}
