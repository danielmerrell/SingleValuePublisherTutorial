import React from "react";

export function usePublishedValue(publisher) {
  const [value, setValue] = React.useState(publisher.value);
  const updateValueCallback = (publishedValue) => {
    const { newValue } = publishedValue;
    setValue(newValue);
  }

  React.useEffect(() => {
    setValue(publisher.value);
    publisher.addSubscription(updateValueCallback);
    return () =>  publisher.removeSubscription(updateValueCallback);
  }, [publisher]);

  return value;
}