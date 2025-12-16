import React, { useState, useEffect, useCallback } from 'react';
import { FaImages, FaVideo, FaPlay, FaExpand, FaTimes, FaSpinner } from 'react-icons/fa';

import image1 from "../../assets/images/Media/1.jpg";
import image2 from "../../assets/images/Media/2.jpg";
import image3 from "../../assets/images/Media/3.jpg";
import image4 from "../../assets/images/Media/4.jpg";
import image5 from "../../assets/images/Media/6.jpg";
import image6 from "../../assets/images/Media/8.jpg";
import image7 from "../../assets/images/Media/9.jpg";

export default function Media() {
  // Base media data
  const baseImages = [image1, image2, image3, image4, image5, image6, image7];
  const baseVideos = [
    { id: '-gove3-uNRw', title: 'Sunday Service Highlights', thumbnail: 'https://img.youtube.com/vi/-gove3-uNRw/maxresdefault.jpg' },
    { id: 'diXb6nM6MKk', title: 'Youth Fellowship', thumbnail: 'https://img.youtube.com/vi/diXb6nM6MKk/maxresdefault.jpg' },
    { id: 'oiDyYGbi4-4', title: 'Prayer Meeting', thumbnail: 'https://img.youtube.com/vi/oiDyYGbi4-4/maxresdefault.jpg' },
    { id: 'vkQTE-djCF8', title: 'Bible Study Session', thumbnail: 'https://img.youtube.com/vi/vkQTE-djCF8/maxresdefault.jpg' },
    { id: 'f4QtbRcbc8U', title: 'Community Outreach', thumbnail: 'https://img.youtube.com/vi/f4QtbRcbc8U/maxresdefault.jpg' },
    { id: 'tyJBx0L0vTI', title: 'Worship Night', thumbnail: 'https://img.youtube.com/vi/tyJBx0L0vTI/maxresdefault.jpg' }
  ];

  // All available media data (simulating larger dataset)
  const allImages = [
    ...baseImages,
    ...Array(20).fill(null).map((_, i) => baseImages[i % baseImages.length])
  ];
  
  const allVideos = [
    ...baseVideos,
    ...Array(15).fill(null).map((_, i) => ({
      id: baseVideos[i % baseVideos.length].id,
      title: `${baseVideos[i % baseVideos.length].title} ${Math.floor(i / baseVideos.length) + 2}`,
      thumbnail: baseVideos[i % baseVideos.length].thumbnail
    }))
  ];

  const [activeTab, setActiveTab] = useState('images');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  
  // Pagination states
  const [displayedImages, setDisplayedImages] = useState([]);
  const [displayedVideos, setDisplayedVideos] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  
  const ITEMS_PER_LOAD = 6;
  const MIN_ITEMS = 6; // Minimum items to keep loaded

  // Load initial content
  useEffect(() => {
    setDisplayedImages(allImages.slice(0, ITEMS_PER_LOAD));
    setDisplayedVideos(allVideos.slice(0, ITEMS_PER_LOAD));
  }, []);

  // Load more images
  const loadMoreImages = useCallback(() => {
    if (imageLoading) return;
    
    setImageLoading(true);
    setTimeout(() => {
      const currentLength = displayedImages.length;
      const newImages = allImages.slice(currentLength, currentLength + ITEMS_PER_LOAD);
      
      if (newImages.length > 0) {
        setDisplayedImages(prev => [...prev, ...newImages]);
      }
      setImageLoading(false);
    }, 300);
  }, [displayedImages.length, imageLoading]);

  // Remove images from end (but keep initial content)
  const removeImagesFromEnd = useCallback(() => {
    if (displayedImages.length > ITEMS_PER_LOAD) {
      setDisplayedImages(prev => prev.slice(0, Math.max(ITEMS_PER_LOAD, prev.length - ITEMS_PER_LOAD)));
    }
  }, [displayedImages.length]);

  // Load more videos
  const loadMoreVideos = useCallback(() => {
    if (videoLoading) return;
    
    setVideoLoading(true);
    setTimeout(() => {
      const currentLength = displayedVideos.length;
      const newVideos = allVideos.slice(currentLength, currentLength + ITEMS_PER_LOAD);
      
      if (newVideos.length > 0) {
        setDisplayedVideos(prev => [...prev, ...newVideos]);
      }
      setVideoLoading(false);
    }, 300);
  }, [displayedVideos.length, videoLoading]);

  // Remove videos from end (but keep initial content)
  const removeVideosFromEnd = useCallback(() => {
    if (displayedVideos.length > ITEMS_PER_LOAD) {
      setDisplayedVideos(prev => prev.slice(0, Math.max(ITEMS_PER_LOAD, prev.length - ITEMS_PER_LOAD)));
    }
  }, [displayedVideos.length]);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);

      // Load more content when scrolling down near bottom
      if (direction === 'down' && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
        if (activeTab === 'images') {
          loadMoreImages();
        } else {
          loadMoreVideos();
        }
      }
      
      // Remove content when scrolling up past certain threshold
      if (direction === 'up' && currentScrollY < document.documentElement.offsetHeight * 0.3) {
        if (activeTab === 'images') {
          removeImagesFromEnd();
        } else {
          removeVideosFromEnd();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, lastScrollY, loadMoreImages, loadMoreVideos, removeImagesFromEnd, removeVideosFromEnd]);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => setLightboxOpen(false);
  const prevLightbox = () => setLightboxIndex((i) => (i - 1 + displayedImages.length) % displayedImages.length);
  const nextLightbox = () => setLightboxIndex((i) => (i + 1) % displayedImages.length);
  
  const closeVideo = () => setSelectedVideo(null);
  const prevVideo = () => {
    const newIndex = (selectedVideoIndex - 1 + displayedVideos.length) % displayedVideos.length;
    setSelectedVideoIndex(newIndex);
    setSelectedVideo(displayedVideos[newIndex].id);
  };
  const nextVideo = () => {
    const newIndex = (selectedVideoIndex + 1) % displayedVideos.length;
    setSelectedVideoIndex(newIndex);
    setSelectedVideo(displayedVideos[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 via-pink-50/40 via-red-50/35 via-orange-50/30 to-blue-50/25 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/30 via-pink-300/25 to-red-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-red-400/30 via-orange-300/25 to-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/25 via-purple-300/30 to-pink-400/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
            Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-pulse">Gallery</span>
          </h1>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of memorable moments, inspiring services, and community events through photos and videos.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-2xl p-2 shadow-xl flex">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold transition-all duration-300 ${
                activeTab === 'images'
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-gray-100/50'
              }`}
            >
              <FaImages className="w-5 h-5" />
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-3 px-8 py-4 rounded-xl font-heading font-semibold transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-700 hover:bg-gray-100/50'
              }`}
            >
              <FaVideo className="w-5 h-5" />
              Video Gallery
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'images' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedImages.map((src, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Gallery ${idx + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <button
                    onClick={() => openLightbox(idx)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FaExpand className="w-6 h-6 text-white" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
            
            {/* Loading indicator for images */}
            {imageLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <FaSpinner className="w-8 h-8 text-gray-700 animate-spin" />
                </div>
              </div>
            )}
            
            {/* Load more button for images */}
            {!imageLoading && displayedImages.length < allImages.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMoreImages}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-heading font-semibold rounded-full hover:from-red-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Load More Images
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedVideos.map((video, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <button
                      onClick={() => {
                        setSelectedVideo(video.id);
                        setSelectedVideoIndex(idx);
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="bg-red-600/90 backdrop-blur-sm rounded-full p-6 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-red-700">
                        <FaPlay className="w-8 h-8 text-white ml-1" />
                      </div>
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-heading text-white font-semibold text-lg">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Loading indicator for videos */}
            {videoLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <FaSpinner className="w-8 h-8 text-gray-700 animate-spin" />
                </div>
              </div>
            )}
            
            {/* Load more button for videos */}
            {!videoLoading && displayedVideos.length < allVideos.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMoreVideos}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-heading font-semibold rounded-full hover:from-red-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Load More Videos
                </button>
              </div>
            )}
          </>
        )}

        {/* Image Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
            <div className="relative">
              <button 
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 rounded-full p-3 text-white transition-colors duration-300 z-[10000]"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <img 
                src={displayedImages[lightboxIndex]} 
                alt={`Gallery ${lightboxIndex + 1}`} 
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" 
              />
            </div>
            <button 
              onClick={prevLightbox}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 z-[10000]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextLightbox}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 z-[10000]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
            <div className="relative w-full max-w-4xl aspect-video">
              <button 
                onClick={closeVideo}
                className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 rounded-full p-3 text-white transition-colors duration-300 z-[10000]"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                className="w-full h-full rounded-lg shadow-2xl"
                allowFullScreen
                allow="autoplay; encrypted-media"
              />
            </div>
            <button 
              onClick={prevVideo}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 z-[10000]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextVideo}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 z-[10000]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
