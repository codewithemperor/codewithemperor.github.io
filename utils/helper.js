export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

export const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const stepVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
      ease: "easeOut",
    },
  },
};

export const generateImagePaths = (
  start,
  end,
  basePath = "/compressed/",
  prefix = "img",
  extension = "webp"
) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    images.push(`${basePath}${prefix}_${i}.${extension}`);
  }
  return images;
};

export const generateSpecificImages = (
  numbers,
  basePath = "/compressed/",
  prefix = "img",
  extension = "webp"
) => {
  return numbers.map((num) => `${basePath}${prefix}_${num}.${extension}`);
};
