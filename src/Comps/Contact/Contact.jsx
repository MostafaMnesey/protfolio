import React from "react";

export default function Contact() {
    function editTitle(){
        document.title='Contact'
    }
    editTitle();
  return  <>
      <div className="contact bg-black py-[100px]">
        <div className="container mx-auto">
          <div className="home min-h-[70vh] ">
            <div className="content py-10">
              <h1 className="text-4xl text-center  text-white">
                Contact Component
              </h1>
              <p className="text-white py-10 relative text-center">
                <i className="fa-solid fa-star px-[30px] after:w-[40%]  after:content-[''] md:after:w-[30%] after:top-[45%] after:right-[55%] after:h-1 after:absolute after:bg-white"></i>
                <span className=" after:w-[40%] after:content-[''] md:after:w-[30%] after:h-1 after:top-[45%] after:left-[55%] after:absolute after:bg-white"></span>
              </p>
            </div>

            <div className="formm w-full text-center ">
              <form className="mx-auto">
                <div className="w-full p-5 flex justify-center">
                  <input
                    type="text"
                    placeholder="User Name"
                    id="small-input"
                    className="block w-[80%] focus:border-0 p-2 text-gray-900 border-0 border-gray-300 rounded-lg bg-gray-50 text-l focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>
                <div className="w-full p-5 flex justify-center">
                  <input
                    type="text"
                    placeholder="User Age"
                    id="small-input"
                    className="block w-[80%] p-2 focus:border-0 text-gray-900 border-0 outline-none  rounded-lg bg-gray-50 text-l  focus:outline-none focus:ring-0 "
                  />
                </div>
                <div className="w-full p-5 flex justify-center">
                  <input
                    type="text"
                    placeholder="User Email"
                    id="small-input"
                    className="block focus:border-0 w-[80%] p-2 text-gray-900 border-0 border-gray-300 rounded-lg bg-gray-50 text-l focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>
                <div className="w-full p-5 flex justify-center">
                  <input
                    type="text"
                    placeholder="User Password"
                    id="small-input"
                    className="block w-[80%] focus:border-0 p-2 text-gray-900 border-0 border-gray-300 rounded-lg bg-gray-50 text-l focus:outline-none focus:ring-0 focus:border-transparent"
                  />
                </div>
              </form>
              <button type="button" class="text-white  hover:text-black border border-white hover:bg-white  focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-3 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Submmit</button>

            </div>
          </div>
        </div>
      </div>
    </>
  
}
