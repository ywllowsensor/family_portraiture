'use client'

export default function Home() {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      {/* Google Fonts link */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="carousel w-full h-screen flex items-center bg-black">
        {/*TITLE Page */}
        <div id="slide0" className="carousel-item relative w-full inset-0 flex flex-col items-start justify-center text-white pl-6" style={{ zIndex: 2 }}>
          <h1 className="text-5xl font-normal mb-6 tracking-tight underline">Technoference</h1>
          <p className="mb-8 max-w-xl text-center">For the best viewing experience, press F11.</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow pr-8">❯</a>
          </div>
        </div>

        {/* NANZO */}
        <div id="slide1" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pr-8">text</p>
          </div>
          <img
            src={`/images/IMG_0418.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex flex-row justify-start">
          <img
            src={`/images/IMG_0144.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pl-8">East Coast Park | 2010</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* BABA */}
        <div id="slide3" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pr-8">text</p>
          </div>
          <img
            src={`/images/IMG_0483.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full flex flex-row justify-start">
          <img
            src={`/images/SNC00081.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pl-8">Bukit Timah Hill | 2009</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* ABANG */}
        <div id="slide5" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pr-8">text</p>
          </div>
          <img
            src={`/images/IMG_0432.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full flex flex-row justify-start">
          <img
            src={`/images/IMG_0148.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pl-8">Science Centre Singapore | 2010</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* IBU */}
        {/* placeholder for ibus new image */}
        <div id="slide7" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pr-8">text</p>
          </div>
          <img
            src={`/images/IMG_0483.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide8" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full flex flex-row justify-start">
          <img
            src={`/images/IMG_0160.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pl-8">Istana Japanese Garden | 2010</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide9" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* NEW TOGETHER */}
        <div id="slide9" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="flex items-end">
            <p className="text-gray-300 text-xs pr-8">text</p>
          </div>
          <img
            src={`/images/IMG_0429_copy.JPG`}
            className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide8" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide10" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* COLLAGE 2x2 */}
        <div id="slide10" className="carousel-item relative w-full flex flex-row justify-end">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full items-center justify-items-center px-8 py-8">
            <img
              src={`/images/IMG_0432.JPG`}
              className="max-h-[40vh] max-w-[45vw] object-contain" />
            <img
              src={`/images/IMG_0418.JPG`}
              className="max-h-[40vh] max-w-[45vw] object-contain" />
            <img
              src={`/images/IMG_0483.JPG`}
              className="max-h-[40vh] max-w-[45vw] object-contain" />
            <img
              src={`/images/IMG_0432.JPG`}
              className="max-h-[40vh] max-w-[45vw] object-contain" />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide9" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>

        {/* PORTRAITS 4x1 */}
        <div id="slide11" className="carousel-item relative w-full flex flex-row justify-center">
          <div className="grid grid-cols-4 gap-4 w-full h-full items-center justify-items-center px-8 py-8">
          <img
            src={`/images/IMG_0418.JPG`}
            className="max-h-[85vh] max-w-[25vw] object-contain rotate-90" />
          <img
            src={`/images/IMG_0483.JPG`}
            className="max-h-[85vh] max-w-[25vw] object-contain rotate-90" />
          <img
            src={`/images/IMG_0432.JPG`}
            className="max-h-[85vh] max-w-[25vw] object-contain rotate-90" />
          <img
            src={`/images/IMG_0483.JPG`}
            className="max-h-[85vh] max-w-[25vw] object-contain rotate-90" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>


      {/* SOLO -> OLD -> TGT IDEA */}

      {/* SOLO */}
      <div id="slide1" className="carousel-item relative w-full flex flex-row justify-end">
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pr-8">nana</p>
        </div>
        <img
          src={`/images/IMG_0418.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full flex flex-row justify-end">
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pr-8">baba</p>
        </div>
        <img
          src={`/images/IMG_0483.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full flex flex-row justify-end">
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pr-8">abang</p>
        </div>
        <img
          src={`/images/IMG_0432.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full flex flex-row justify-end">
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pr-8">ibu</p>
        </div>
        <img
          src={`/images/IMG_0483.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>

      {/* OLD */}
      <div id="slide5" className="carousel-item relative w-full flex flex-row justify-start">
        <img
          src={`/images/IMG_0160.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pl-8">Istana Japanese Garden | 2010</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full flex flex-row justify-start">
        <img
          src={`/images/IMG_0144.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pl-8">East Coast Park | 2010</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide7" className="carousel-item relative w-full flex flex-row justify-start">
        <img
          src={`/images/SNC00081.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pl-8">Bukit Timah Hill | 2009</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide8" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>
      <div id="slide8" className="carousel-item relative w-full flex flex-row justify-start">
        <img
          src={`/images/IMG_0148.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pl-24" />
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pl-8">Science Centre Singapore | 2010</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide9" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>

      {/* TGT */}
      <div id="slide9" className="carousel-item relative w-full flex flex-row justify-end">
        <div className="flex items-end">
          <p className="text-gray-300 text-xs pr-8">text</p>
        </div>
        <img
          src={`/images/IMG_0429_copy.JPG`}
          className="max-h-[85vh] max-w-[90vw] object-contain pr-24" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
          <a href="#slide8" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
        </div>
      </div>


    </div>
    </div >
  )
}