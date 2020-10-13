import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    // if ssr
    // request should be made to http://ingress-nginx.ingress-nginx.svc.cluster.local (see k17)
    // return axios.create({
    //   baseURL:
    //     'http://ingress-nginx.ingress-nginx-controller.svc.cluster.local',
    //   headers: req.headers
    // });

    return axios.create({
      baseURL: 'http://ticketing.dev/'
    });
  } else {
    // if from browser
    // request can be made with a base url ''
    return axios.create({
      baseURL: '/'
    });
  }
};
