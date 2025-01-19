import React from "react";

export default function Footer() {
  return <>
          <div className="footer bg-black grid grid-cols-1  md:grid-cols-3 ">
        <div className="f1 flex flex-col py-10 px-10 text-white  text-center ">
          <p className="text-2xl font-bold">LOCATION</p>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="f1 flex flex-col py-10 px-10 text-white  text-center ">
          <p className="text-2xl font-bold">Around The Web</p>
          <div className="icons flex justify-center py-3">
            <div className="icon  text-white h-[30px] w-[30px] border-2 border-white rounded-full flex justify-center items-center p-4 mx-2">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon  text-white h-[30px] w-[30px] border-2 border-white rounded-full flex justify-center items-center p-4 mx-2">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon  text-white h-[30px] w-[30px] border-2 border-white rounded-full flex justify-center items-center p-4 mx-2">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="icon  text-white h-[30px] w-[30px] border-2 border-white rounded-full flex justify-center items-center p-4 mx-2">
            <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          
        </div>
        <div className="f1 flex flex-col py-10  text-white md:mx-10  text-center ">
          <p className="text-2xl font-bold">ABOUT FREELANCER</p>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        
      </div>
    
<footer className="bg-black text-center  dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
    <span className="text-md text-white  sm:text-center dark:text-gray-400">© 2025 <span className="text-l text-red-900">Scorpion 🦂 </span> All Rights Reserved.
    </span>
  
  </div>
</footer>



    </>
  
}
