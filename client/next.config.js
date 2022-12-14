module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  env: {
    // local env variables
    // API_URL: "http://localhost:3001",
    // BASE_URL: "http://localhost:3001",
    // LOCAL_URL: "http://localhost:3001",
    // TICKETS_API_URL: "http://localhost:3002",
    // TICKET_BASE_URL: "http://localhost:3002",
    // TICKET_LOCAL_URL: "http://localhost:3002",

    // container env variables
    API_URL: "",
    BASE_URL: "/",
    LOCAL_URL:
      "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
  },
};
