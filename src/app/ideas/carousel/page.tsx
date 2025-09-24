'use client'

const images = [
    "IMG_0014.JPG",
    "IMG_0106.JPG",
    "IMG_0144.JPG",
    "IMG_0148.JPG",
    "IMG_0149.JPG",
    "IMG_0150.JPG",
    "IMG_0160.JPG",
    "IMG_0193.JPG",
    "SNC00074.jpg",
    "SNC00075.jpg",
    "SNC00076.jpg",
    "SNC00081.jpg",
    "SNC00082.jpg",
    "SNC00085.jpg",
    "SNC00131.jpg",
    "SNC00132.jpg",
];

export default function Carousel() {
    return (
        <div className="carousel w-full h-screen flex items-center bg-black">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={`/images/IMG_0160.JPG`}
                    className="max-h-[80vh] max-w-[90vw] object-contain mx-auto" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide7" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❮</a>
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
                    <a href="#slide1" className="btn btn-circle bg-black text-gray-600 hover:text-gray-400 border-none shadow">❯</a>
                </div>
            </div>
        </div>
    )
}