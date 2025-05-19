import React from 'react'

function NameCard() {
  return (
    <div>
        <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-96 h-auto rounded-lg shadow-md bg-white p-4">
          <div className="flex items-center justify-center pb-4">
            <img
              src="public\lenno.png"
              alt=""
              className="h-20 rounded-full shadow-lg"
            />
          </div>
          <div className=" text-center pb-4">
            <h1 className="font-bold text-xl">Lenno Nardo</h1>
            <h3 className="text-gray-400">Web Developer</h3>
          </div>

          <div className="pb-4">
            <h2 className="text-gray-500">
              "Hai, perkenalkan nama saya Lenno Nardo saya adalah seorang web
              developer yang berpengalaman dalam mengembangkan aplikasi web
              menggunakan berbagai teknologi seperti React, Laravel, dan
              MySQL."
            </h2>
          </div>

          {/* ini link instagram */}
          <SocialLink
            url="https://www.instagram.com/lenno_nar/"
            icon={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            }
            label="Instagram"
          />

          {/* ini link facebook  */}
          <SocialLink
            url="https://www.instagram.com/lenno_nar/"
            icon={
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            }
            label="Facebook"
          />
        </div>
      </div>
    </div>
  )
}

export default NameCard

function SocialLink({ url, icon, label }) {
    return (
      <>
      <div className="pb-1">
        <a href={url} target="_blank" rel="noopener noreferrer cl">
          <div className="w-full bg-black text-white text-center p-1.5 rounded-lg flex items-center justify-center">
            {icon}
            <h1 className="pl-2">{label}</h1>
          </div>
        </a>
      </div>
      </>
    );
  }