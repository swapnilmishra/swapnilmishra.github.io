import ReactGA from 'react-ga'
import {config} from 'config'

if(config.googleAnalyticsId)
  ReactGA.initialize(config.googleAnalyticsId);

exports.onRouteUpdate = (state, page, pages) => {
  if(config.googleAnalyticsId)
    ReactGA.pageview(state.pathname);
};