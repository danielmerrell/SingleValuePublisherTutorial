import React from "react";

// TODO clean up the subscription
export function usePublishedValue(publisher) {
  const [value, setValue] = React.useState(publisher.value);
  const updateValueCallback = (publishedValue) => {
    const { newValue } = publishedValue;
    setValue(newValue);
  }

  React.useEffect(() => {
    setValue(publisher.value);
    publisher.addSubscription(updateValueCallback);
    // return () => publisher.removeSubscription();
  }, [publisher]);

  return value;
}