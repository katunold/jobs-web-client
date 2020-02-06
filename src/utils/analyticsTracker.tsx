import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';
import { AppMachineContext } from './context';

const trackingId =
  process.env.REACT_APP_BUILD_ENV === 'development'
    ? 'UA-148033418-3'
    : 'UA-148033418-1';

// Initializes an instance of GA-Tag to allow for tracking within the  entire app
export const initializeGA = (userId: any) => {
  ReactGA.initialize(
    trackingId,
    {
      gaOptions: {
        userId: userId
      }
    }
    /*
        When in development mode, comment out the line below to allow
        you to test and log each GA activity within the console
       */
    // { debug: true }
  );
};

/*
 When called sends a page hit for the page it is invoked on
 */
export const logPageView = (history: any, userId: string) => {
  /*
   Using history to listen for when location changes
    and pickup the new pathname
   */
  history.listen((location: any) => {
    const page = location.pathname || window.location.pathname;
    // pathname is  used to set the page and title in GA
    ReactGA.set({ page: page, userId: userId });
    ReactGA.pageview(page);
  });
};

/*
 A HOC to use/ wrap around the entry point of the application
 or can be used to wrap a component that needs pageView tracking
 */
export const withTracker = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const [state] = useContext(AppMachineContext);
    const userId = state.context.user?.uid;
    const history = useHistory();

    // tracks a pageView when the component has mounted
    useEffect(() => {
      logPageView(history, userId);
    }, [history, userId]);

    return <WrappedComponent {...props} />;
  };
};

/*
 Used to  track mouse clicks within the application
 to be applied to each new **onClick** or **Link**
 */
export const trackClick = (event: any, category?: string, action?: string) => {
  ReactGA.event({
    category: category || document.title,
    action: action || `${event.type} - ${event.target.innerText}`
  });
};

/*
 Specifically suited to track Form Submissions
 uses the beacon method of transport
 */
export const trackForm = (event: any, category?: string, action?: string) => {
  ReactGA.event({
    category: category || document.title,
    action: action || `${event.type} - ${event.target.innerText}`,
    label: 'Form',
    transport: 'beacon'
  });
};
