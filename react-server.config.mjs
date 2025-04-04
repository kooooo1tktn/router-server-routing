export default {
  root: "src/app",
  server: {
    port: 3001,
  },
  router: {
    matchers: {
      number: (value) => {
        const isNumber = /^\d+$/.test(value);
        console.log(`Config matcher: Matching ${value} as number: ${isNumber}`);
        return isNumber;
      },
    },
  },
};
