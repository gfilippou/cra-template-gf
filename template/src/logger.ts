// Contains all info for effective debugging
// This component would import and use an external error tracking service, e.g. Sentry

export const logger = {
  error: (message: string, error: Error, { ...rest }) => {
    console.error(message, error, '\nAdditional info', rest);
    // logToExternalService({ message, error });
  },
};
