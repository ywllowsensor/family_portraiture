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
        <div id="slide0" className="carousel-item relative w-full inset-0 flex flex-col items-start justify-center text-white pl-6" style={{ zIndex: 2 }}>
          <h1 className="text-5xl font-normal mb-6 tracking-tight">Technoference</h1>
          <p className="mb-8 max-w-xl text-center">For the best viewing experience, press F11.</p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-end">
            <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={`/images/IMG_0160.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={`/images/IMG_0106.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={`/images/SNC00085.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={`/images/SNC00132.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={`/images/IMG_0418.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src={`/images/IMG_0432.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img
            src={`/images/IMG_0429.JPG`}
            className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
            <a href="#slide0" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
          </div>
        </div>
      </div>



    </div>
  )
}