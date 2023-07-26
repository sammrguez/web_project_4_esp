const presets = [
  [
    "@babel/preset-env",
    {
      // preset que quieres utilizar
      targets: {
        // versiones de navegadores en las que queremos que nuestro código sea compatible
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      },

      useBuiltIns: "entry",
      corejs: "^3",
    },
  ],
];

module.exports = { presets };
