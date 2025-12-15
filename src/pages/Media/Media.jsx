import React, { useState } from 'react';

import image1 from "../../assets/images/Media/1.jpg";
import image2 from "../../assets/images/Media/2.jpg";
import image3 from "../../assets/images/Media/3.jpg";
import image4 from "../../assets/images/Media/4.jpg";
import image5 from "../../assets/images/Media/6.jpg";
import image6 from "../../assets/images/Media/8.jpg";
import image7 from "../../assets/images/Media/9.jpg";

export default function Media() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const [modals, setModals] = useState({ imageModal: false, videoModal: false });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openModal = (modalId) => setModals((m) => ({ ...m, [modalId]: true }));
  const closeModal = (modalId) => setModals((m) => ({ ...m, [modalId]: false }));

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % images.length);

  const slide = (id, direction) => {
    const track = document.getElementById(id);
    if (track) track.scrollBy({ left: direction * 350, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white">
      {/* Decorative subtle circles (like GetInvolved) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
      </div>

      {isLoading ? (
        // Loading Skeleton
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="h-16 bg-white/10 rounded-lg animate-pulse mb-6 mx-auto w-3/4 max-w-2xl" />
            <div className="h-6 bg-white/10 rounded-lg animate-pulse mx-auto w-1/2 max-w-xl" />
          </div>

          {/* Image Gallery Skeleton */}
          <section className="max-w-7xl mx-auto mb-12">
            <div className="h-8 bg-white/10 rounded-lg animate-pulse mb-6 w-1/3 mx-auto" />
            <div className="flex flex-wrap gap-6 justify-center">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="w-80 h-48 bg-white/10 rounded-lg animate-pulse" />
              ))}
            </div>
            <div className="text-center mt-6">
              <div className="h-12 bg-white/10 rounded-full animate-pulse w-48 mx-auto" />
            </div>
          </section>

          {/* Video Gallery Skeleton */}
          <section className="max-w-7xl mx-auto mb-12">
            <div className="h-8 bg-white/10 rounded-lg animate-pulse mb-6 w-1/3 mx-auto" />
            <div className="flex flex-wrap gap-6 justify-center">
              {[...Array(5)].map((_, idx) => (
                <div key={idx} className="w-80 h-48 bg-white/10 rounded-lg animate-pulse" />
              ))}
            </div>
            <div className="text-center mt-6">
              <div className="h-12 bg-white/10 rounded-full animate-pulse w-48 mx-auto" />
            </div>
          </section>
        </div>
      ) : (
        // Content
        <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="mx-auto mb-6 font-black leading-tight" style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', lineHeight: 0.95 }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-blue-400">Media Section</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">Browse our images and videos from recent events and gatherings.</p>
        </div>

        {/* Image Gallery */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Image Gallery</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {images.slice(0,5).map((src, idx) => (
              <button key={idx} onClick={() => openLightbox(idx)} className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 backdrop-blur-md bg-white/10 border border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/50">
                <img src={src} alt={`Media ${idx+1}`} className="w-80 h-48 object-cover" />
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
            <button onClick={() => openModal('imageModal')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-full hover:scale-110 transition transform shadow-lg hover:shadow-xl hover:shadow-purple-500/50 backdrop-blur-sm">More Images →</button>
          </div>
        </section>

        {/* Video Gallery */}
        <section className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Video Gallery</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <iframe className="w-80 h-48 rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50" src="https://www.youtube.com/embed/-gove3-uNRw" title="Video 1" allowFullScreen></iframe>
            <iframe className="w-80 h-48 rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50" src="https://www.youtube.com/embed/diXb6nM6MKk" title="Video 2" allowFullScreen></iframe>
            <iframe className="w-80 h-48 rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50" src="https://www.youtube.com/embed/oiDyYGbi4-4" title="Video 3" allowFullScreen></iframe>
            <iframe className="w-80 h-48 rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50" src="https://www.youtube.com/embed/vkQTE-djCF8" title="Video 4" allowFullScreen></iframe>
            <iframe className="w-80 h-48 rounded-xl shadow-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50" src="https://www.youtube.com/embed/f4QtbRcbc8U" title="Video 5" allowFullScreen></iframe>
          </div>
          <div className="text-center mt-6">
            <button onClick={() => openModal('videoModal')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-full hover:scale-110 transition transform shadow-lg hover:shadow-xl hover:shadow-purple-500/50 backdrop-blur-sm">More Videos →</button>
          </div>
        </section>

        {/* Lightbox (react-controlled) */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
            <button onClick={closeLightbox} className="absolute top-20 right-6 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl shadow-lg z-50">&times;</button>
            <button onClick={prevLightbox} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-700/80 flex items-center justify-center text-white text-2xl shadow-lg z-50">❮</button>
            <img src={images[lightboxIndex]} alt={`Media ${lightboxIndex+1}`} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl z-10" />
            <button onClick={nextLightbox} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-700/80 flex items-center justify-center text-white text-2xl shadow-lg z-50">❯</button>
          </div>
        )}

        {/* Image Carousel Modal */}
        {modals.imageModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 w-11/12 max-w-5xl rounded-2xl p-6 shadow-2xl shadow-purple-500/50">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">More Images</h3>
                <button onClick={() => closeModal('imageModal')} className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all">&times;</button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button onClick={() => slide('imageCarousel', -1)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 transition-all hover:shadow-lg">❮</button>
                <div id="imageCarousel" className="flex gap-4 overflow-x-auto py-4">
                  {images.map((src, i) => (
                    <img key={i} src={src} alt={`More ${i+1}`} className="w-80 h-48 rounded-lg object-cover flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                  ))}
                </div>
                <button onClick={() => slide('imageCarousel', 1)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 transition-all hover:shadow-lg">❯</button>
              </div>
            </div>
          </div>
        )}

        {/* Video Carousel Modal */}
        {modals.videoModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 w-11/12 max-w-5xl rounded-2xl p-6 shadow-2xl shadow-purple-500/50">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">More Videos</h3>
                <button onClick={() => closeModal('videoModal')} className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all">&times;</button>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button onClick={() => slide('videoCarousel', -1)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 transition-all hover:shadow-lg">❮</button>
                <div id="videoCarousel" className="flex gap-4 overflow-x-auto py-4">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/tyJBx0L0vTI?si=C_4VwGWlSB1bFclB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-96 h-56 rounded-lg flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/VId70DhFiNE?si=qheA8DefgiKSphxL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-96 h-56 rounded-lg flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/jiWnz2tz9e8?si=hNO-Ca1oVG0-k-9d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-96 h-56 rounded-lg flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/ZWhbzBmASok?si=T7L0CULm-TTmuSLB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-96 h-56 rounded-lg flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/t67X22QtJGI?si=46O1mozTk9KSXWM5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-96 h-56 rounded-lg flex-shrink-0 shadow-lg backdrop-blur-sm border border-white/20" />
                </div>
                <button onClick={() => slide('videoCarousel', 1)} className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 transition-all hover:shadow-lg">❯</button>
              </div>
            </div>
          </div>
        )}
        </div>
      )}
    </div>
  );
}
