import React from 'react';

function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-header text-black">
              Welcome!
            </h1>
            <p className="mb-8 leading-relaxed">
              Hi, my name is Elena and I'm a software engineer who primarily
              focuses on creating fun, cozy, and accessible designs to bring joy
              to a wide range of viewers. Enjoy looking around!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex bg-blue text-black font-header border-0 py-2 px-6 focus:outline-none hover:bg-green rounded text-lg">
                Portfolio
              </button>
              <button className="ml-4 inline-flex text-black bg-orange font-header border-0 py-2 px-6 focus:outline-none hover:bg-yellow rounded text-lg">
                About Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
