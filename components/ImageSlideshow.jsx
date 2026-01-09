// components/ImageSlideshow.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Loader } from "lucide-react";

const ImageSlideshow = ({
  images,
  isOpen,
  onClose,
  isDarkMode,
  projectTitle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Preload first image
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);

  // Preload adjacent images for smooth navigation
  useEffect(() => {
    if (isOpen) {
      const preloadIndices = [
        currentIndex - 1,
        currentIndex,
        currentIndex + 1,
      ].filter((i) => i >= 0 && i < images.length);

      preloadIndices.forEach((idx) => {
        if (!loadedImages.has(idx) && !imageErrors.has(idx)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, idx]));
          };
          img.onerror = () => {
            setImageErrors((prev) => new Set([...prev, idx]));
          };
          img.src = images[idx];
        }
      });
    }
  }, [currentIndex, isOpen, images, loadedImages, imageErrors]);

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
    setTimeout(() => setIsLoading(false), 300);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
    setTimeout(() => setIsLoading(false), 300);
  };

  const jumpToSlide = (index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIsZoomed(false);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const hasImageError = imageErrors.has(currentIndex);

  // Calculate visible range for thumbnail dots
  const getVisibleDotIndices = () => {
    if (images.length <= 20) {
      return Array.from({ length: images.length }, (_, i) => i);
    }

    const range = 5; // Show 5 dots on each side of current
    const start = Math.max(0, currentIndex - range);
    const end = Math.min(images.length - 1, currentIndex + range);

    const indices = [];
    for (let i = start; i <= end; i++) {
      indices.push(i);
    }
    return indices;
  };

  const visibleDotIndices = getVisibleDotIndices();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
        >
          <X size={24} />
        </motion.button>

        {/* Project Title & Counter */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 z-50 text-white"
        >
          <h3 className="text-xl font-medium">{projectTitle}</h3>
          <p className="text-sm text-gray-400">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm hover:scale-110"
              disabled={isLoading}
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm hover:scale-110"
              disabled={isLoading}
            >
              <ChevronRight size={32} />
            </motion.button>
          </>
        )}

        {/* Zoom Toggle */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
          className="absolute bottom-20 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm"
          disabled={hasImageError}
        >
          <ZoomIn size={24} />
        </motion.button>

        {/* Main Image Container */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={`relative max-w-7xl max-h-[85vh] mx-4 ${
            isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
        >
          <AnimatePresence mode="wait">
            {hasImageError ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-white p-8"
              >
                <X size={48} className="mb-4 text-red-500" />
                <p className="text-lg">Image failed to load</p>
                <p className="text-sm text-gray-400 mt-2">
                  img_{currentIndex + 1}.webp
                </p>
              </motion.div>
            ) : (
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Design ${currentIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: loadedImages.has(currentIndex) ? 1 : 0.5,
                  scale: isZoomed ? 1.5 : 1,
                  transition: { duration: 0.3 },
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
                onClick={() => setIsZoomed(!isZoomed)}
                onError={() =>
                  setImageErrors((prev) => new Set([...prev, currentIndex]))
                }
                style={{
                  maxHeight: "85vh",
                  transformOrigin: "center",
                }}
              />
            )}
          </AnimatePresence>

          {/* Loading Indicator */}
          {(isLoading || !loadedImages.has(currentIndex)) && !hasImageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader size={48} className="text-blue-500 animate-spin" />
            </div>
          )}
        </motion.div>

        {/* Thumbnail Navigation with Fixed Keys */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="flex gap-2 bg-black/50 backdrop-blur-md px-4 py-3 rounded-full items-center">
              {/* Show "..." if not showing first images */}
              {visibleDotIndices[0] > 0 && (
                <span key="dots-start" className="text-white/50 text-xs px-2">
                  ...
                </span>
              )}

              {/* Show dots for visible range */}
              {visibleDotIndices.map((idx) => (
                <button
                  key={`dot-${idx}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    jumpToSlide(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-blue-500 w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}

              {/* Show "..." if not showing last images */}
              {visibleDotIndices[visibleDotIndices.length - 1] <
                images.length - 1 && (
                <span key="dots-end" className="text-white/50 text-xs px-2">
                  ...
                </span>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageSlideshow;
