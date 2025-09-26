'use client'

import { useState } from "react"

export default function Home() {
  const [overlayImg, setOverlayImg] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleImgClick = (src: string) => {
    setOverlayImg(src);
    setTimeout(() => setIsOverlayVisible(true), 10); // trigger animation after mount
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setTimeout(() => setOverlayImg(null), 300); // wait for animation to finish
  };

  return (
    <div
      className="w-full h-screen overflow-y-scroll bg-black text-white snap-y snap-mandatory"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      {/* Google Fonts link */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* TITLE Page */}
      <section className="w-full h-screen flex flex-col items-start justify-center pl-6 snap-center">
        <h1 className="text-5xl font-normal mb-6 tracking-tight underline">Technoference</h1>
        <p className="mb-4 max-w-xl text-center text-xs">This project is best viewed on a laptop.</p>
        <p className="mb-4 max-w-xl text-center">Press <kbd className="kbd kbd-sm text-black">F11</kbd> to go fullscreen.</p>
        <p className="mb-8 max-w-xl text-center">Hit <kbd className="kbd kbd-sm !text-black">space</kbd> to continue.</p>
      </section>

      {/* DEFINITION/BG of technoference page??? */}

      {/* PORTRAITS 4x1 */}
      <section className="w-full h-screen flex flex-col justify-around snap-center">
        <div className="grid grid-cols-4 w-full">
          {["/images/IMG_0418.JPG", "/images/IMG_0483.JPG", "/images/IMG_0432.JPG", "/images/IMG_0483.JPG"].map((src, id) => (
            <img
              key={id}
              src={src}
              className="max-h-[70vh] max-w-[25vw] object-contain rotate-90 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              alt=""
              onClick={() => handleImgClick(src)}
            />
          ))}
        </div>
      </section>

      {/* OLD */}
      <section className="w-full h-screen flex flex-col justify-center snap-center">
        <div className="flex flex-row justify-start items-end">
          <img
            src={`/images/IMG_0160.JPG`}
            className="max-h-[75vh] max-w-[90vw] object-contain pl-8"
            alt="Istana Japanese Garden | 2010"
          />
          <p className="text-gray-300 text-xs pl-8">Istana Japanese Garden | 2010</p>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col justify-center snap-center">
        <div className="flex flex-row justify-end items-end">
          <p className="text-gray-300 text-xs pr-8">East Coast Park | 2010</p>
          <img
            src={`/images/IMG_0144.JPG`}
            className="max-h-[75vh] max-w-[90vw] object-contain pr-8"
            alt="East Coast Park | 2010"
          />
        </div>
      </section>

      <section className="w-full h-screen flex flex-col justify-center snap-center">
        <div className="flex flex-row justify-start items-end">
          <img
            src={`/images/SNC00081.jpg`}
            className="max-h-[75vh] max-w-[90vw] object-contain pl-8"
            alt="Bukit Timah Hill | 2009"
          />
          <p className="text-gray-300 text-xs pl-8">Bukit Timah Hill | 2009</p>
        </div>
      </section>

      <section className="w-full h-screen flex flex-col justify-center snap-center">
        <div className="flex flex-row justify-end items-end">
          <p className="text-gray-300 text-xs pr-8">Science Centre Singapore | 2010</p>
          <img
            src={`/images/IMG_0148.JPG`}
            className="max-h-[75vh] max-w-[90vw] object-contain pr-8"
            alt="Science Centre Singapore | 2010"
          />
        </div>
      </section>

      {/* TGT - NANA & ABANG */}
      <section className="w-full h-screen flex flex-col items-center justify-center snap-center">
        <img
          src={`/images/IMG_0429_copy.JPG`}
          className="max-h-[80vh] max-w-[90vw] object-contain"
          alt="TGT"
        />
      </section>

      {/* TGT - IBU & BABA */}
      <section className="w-full h-screen flex flex-col items-center justify-center snap-center">
        <img
          src={`/images/IMG_0429_copy.JPG`}
          className="max-h-[80vh] max-w-[90vw] object-contain"
          alt="TGT"
        />
      </section>

      {/* TGT - EVERYONE */}
      <section className="w-full h-screen flex flex-col items-center justify-center snap-center">
        <img
          src={`/images/IMG_0429_copy.JPG`}
          className="max-h-[80vh] max-w-[90vw] object-contain mb-12"
          alt="TGT"
        />
      </section>

      <section className="w-full h-screen flex flex-col items-center justify-center snap-center">
        <button
          className="btn btn-ghost font-light"
          onClick={() => {
            const container = document.querySelector('div.w-full.h-screen.overflow-y-scroll');
            if (container) {
              container.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Return to start
        </button>
      </section>

      {/* Overlay for portraits */}
      {overlayImg && (
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${isOverlayVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeOverlay}
        >
          <img
            src={overlayImg}
            className={`max-h-[60vh] max-w-[60vw] object-contain rotate-90 transition-transform duration-300 ${isOverlayVisible ? 'scale-100' : 'scale-75'}`}
            alt="Fullscreen"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white hover:text-gray-300 text-3xl cursor-pointer"
            onClick={closeOverlay}
          >
            ×
          </button>
        </div>
      )}


    </div>
  )
}