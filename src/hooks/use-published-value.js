import React from "react";

// TODO clean up the subscription
export function usePublishedValue(publisher) {
  const [value, setValue] = React.useState(publisher.value);
  const updateValueCallback = (newValue) => setValue(newValue);

  React.useCallback(() => {
    publisher.addSubscription(updateValueCallback);
    // return () => publisher.removeSubscription();
  }, [])

  return value;
}