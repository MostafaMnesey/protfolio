import React from "react";
import imgs from "../../assets/imgs/header.jpg";
import "flowbite/dist/flowbite.css";
export default function Home() {
  function editTitle(){
    document.title='Home' 
}
editTitle();
  return<>
   <section className="bg-black overflow-hidden pt-[10px]">
        <div className="container mx-auto bg-black">
          <div className="home min-h-[100vh] flex flex-col items-center justify-center">
            <div className="img -[30px] hover:scale-105 hover:rotate-45 transition-all duration-500 ease-in-out">
              <img src={imgs} className="rounder rounded-full" alt="" />
            </div>
            <div className="content py-10">
              <h1 className="text-4xl text-center  text-white">
                Hello, I'm Mostafa Mnesey
              </h1>
              <p className="text-white py-10 relative text-center">
                <i
                  className="fa-solid fa-star px-[30px] after:w-[50%]  after:content-[''] md:after:w-[100%] after:top-[45%] after:right-[60%] after:h-1 after:absolute after:bg-white
                "
                ></i>
                <span className=" after:w-[50%] after:content-[''] md:after:w-[100%] after:h-1 after:top-[45%] after:left-[60%] after:absolute after:bg-white"></span>
              </p>
              <p className="text-white text-lg text-center">Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </section>
    </>
  
}
