import React from 'react'
import Image from "next/image";
const WelcomeFooter = () => {
  return (
    <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/satria-tama-29522b1a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://www.svgrepo.com/show/448234/linkedin.svg"
            alt="File icon"
            width={18}
            height={18}
          />
          Satria Tama
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/satriatama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          satriatama
        </a>
        <a
          className="flex items-center justify-center gap-1 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/satriatama155/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://www.svgrepo.com/show/521711/instagram.svg"
            alt="File icon"
            width={18}
            height={18}
          />
          @satriatama155
        </a>
      </footer>
  )
}

export default WelcomeFooter