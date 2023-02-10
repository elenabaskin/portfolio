import React from 'react';

function MiniProjects() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div class="p-4">
              <div class="h-full bg-blue bg-opacity-75 px-5 pt-5 pb-5 rounded-lg overflow-hidden text-center relative md:pb-10 lg:pb-5 hover:bg-purple hover:bg-opacity-75">
                <div class="bg-white p-5">
                  <h2 class="tracking-widest text-xs title-font font-body text-black mb-1 bg-blue bg-opacity-50 rounded">
                    PROJECT
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-header text-black mb-3">
                    Task Tracker
                  </h1>
                </div>
                <button className="inline-flex bg-purple text-black font-header border-0 focus:outline-none mt-2 px-2 hover:bg-white hover:underline rounded text-lg">
                  Go!
                </button>
              </div>
            </div>
            <div class="p-4">
              <div class="h-full bg-green bg-opacity-75 px-5 pt-5 pb-5 rounded-lg overflow-hidden text-center relative md:pb-10 lg:pb-5 hover:bg-yellow hover:bg-opacity-75">
                <div class="bg-white p-5">
                  <h2 class="tracking-widest text-xs title-font font-body text-black mb-1 bg-green bg-opacity-50 rounded">
                    PROJECT
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-header text-black mb-3">
                    gentle. (Version 1)
                  </h1>
                </div>
                <button className="inline-flex bg-yellow text-black font-header border-0 focus:outline-none mt-2 px-2 hover:bg-white hover:underline rounded text-lg">
                  Go!
                </button>
              </div>
            </div>
            <div class="p-4">
              <div class="h-full bg-orange bg-opacity-75 px-5 pt-5 pb-5 rounded-lg overflow-hidden text-center relative md:pb-10 lg:pb-5 hover:bg-pink hover:bg-opacity-75">
                <div class="bg-white p-5">
                  <h2 class="tracking-widest text-xs title-font font-body text-black mb-1 bg-orange bg-opacity-50 rounded">
                    PROJECT
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl font-header text-black mb-3">
                    gentle. (Version 2)
                  </h1>
                </div>
                <button className="inline-flex bg-pink text-black font-header border-0 focus:outline-none mt-2 px-2 hover:bg-white hover:underline rounded text-lg">
                  Go!
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button className="inline-flex bg-pink text-black font-header border-0 py-2 px-6 focus:outline-none hover:bg-purple rounded text-lg">
              See More!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MiniProjects;
