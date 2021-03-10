module.exports = {
  email: 'hirwablessing7@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hirwablessing',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hirwa-blessing',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/blessingartcreator',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/blessingartcreator',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/graphicblessing',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#work',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: `/#about`,
    },
  ],

  colors: {
    green: '#CBBA9C',
    navy: 'rgba(203,186,156,0.2)',
    darkNavy: '#000',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
