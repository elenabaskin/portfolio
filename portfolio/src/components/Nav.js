import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span class="ml-3 text-xl">(logo)</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to="/projects" class="mr-5 hover:text-gray-900">
              Portfolio
            </Link>
            <Link to="/about" class="mr-5 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
