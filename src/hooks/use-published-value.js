import React from "react";

// TODO clean up the subscription
export function usePublishedValue(publisher) {
  const [value, setValue] = React.useState(publisher.value);
  const updateValueCallback = (publishedValue) => {
    const { newValue } = publishedValue;
    setValue(newValue);
  }

  React.useEffect(() => {
    publisher.addSubscription(updateValueCallback);
    // return () => publisher.removeSubscription();
  }, []);

  return value;
}