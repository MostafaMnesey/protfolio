import React, { useState } from "react";
import img1 from "../../assets/imgs/1.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/3.png";
import img4 from "../../assets/imgs/4.png";
import img5 from "../../assets/imgs/5.jpg";
import img6 from "../../assets/imgs/6.jpg";

export default function Gallary() {
  function editTitle() {
    document.title = "Gallary";
  }
  editTitle();
  
   let [img,setImg] = useState(null);
   ()=>{
    setImg(null)
   }

 
  return (
    <>
      <div className="contact bg-black py-[100px]">
        <div className="container mx-auto">
          <div className="home min-h-[70vh] ">
            <div className="content py-10">
              <h1 className="text-4xl text-center  text-white">
                Gallary Component
              </h1>
              <p className="text-white py-10 relative text-center">
                <i className="fa-solid fa-star px-[30px] after:w-[40%]  after:content-[''] md:after:w-[30%] after:top-[45%] after:right-[55%] after:h-1 after:absolute after:bg-white"></i>
                <span className=" after:w-[40%] after:content-[''] md:after:w-[30%] after:h-1 after:top-[45%] after:left-[55%] after:absolute after:bg-white"></span>
              </p>
            </div>

            <div className="imgs overflow-x-hidden gap-5  grid sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-5">
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img1} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img1)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img2} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img2)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img3} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img3)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img4} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img4)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img5} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img5)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
              <div className="img-Wrap relative border-2 group/img flex justify-center h-[100%] w-[100%]">
                <img src={img6} className="w-full" alt="" />
                <div className="layer flex justify-center items-center  w-full transition-all bg-[rgba(0,0,0,0.8)] group-hover/img:opacity-100 opacity-0  absolute top-0 left-0 right-0 bottom-0 ">
                  <button
                    data-modal-target="default-modal"
                    onClick={ ()=>{
                     setImg(img6)
                
                    }}
                    data-modal-toggle="default-modal"
                    className="block text-transparent bg-transparent group-hover/img:bg-white transition-all group-hover/img:text-black focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    <i class="fa-solid fa-plus text-3xl"></i>
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Main modal */}
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full rounded-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5  rounded-t dark:border-gray-600">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 bg-black space-y-4 ">
                <img src={img} className="w-full " alt="" />
              </div>
              {/* Modal footer */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
