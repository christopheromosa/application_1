export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildrent: 0.1,
    },
  },
};

export const routeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    delay: 0.1,
    duration: 0.1,
    transition: {},
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.1,
      ease: "easeInOut",
    },
  },
};
