import React from 'react';
import { Link } from 'react-router-dom';
var { SocialIcon } = require('react-social-icons');

function Footer() {
  return (
    <>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            to="/"
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span class="ml-3 text-xl">(logo)</span>
          </Link>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 —
            <a
              href="https://linkedin.com/ebaskin3"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @elenab
            </a>
          </p>
          <span class="inline-flex space-x-1.5 px-2 justify-center sm:justify-start">
            <SocialIcon
              url="linkedin.com/in/ebaskin3/"
              network="linkedin"
              bgColor="#ffe8a3"
              fgColor="#111111"
              style={{ height: 25, width: 25 }}
            />
            <SocialIcon
              url="github.com/elenabaskin"
              network="github"
              bgColor="#d1f4af"
              fgColor="#111111"
              style={{ height: 25, width: 25 }}
            />
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
