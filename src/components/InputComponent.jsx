import React from 'react';
import { ManagerContext } from "../manager-context";
import { usePublishedValue } from "../hooks/use-published-value";

export function InputComponent(props) {
  const { manager } = React.useContext(ManagerContext)
  const title = usePublishedValue(manager.titlePublisher);
  const [value, setValue] = React.useState(title);

  React.useEffect(() => {
    setValue(title);
  }, [title]);

  const onChangeHandler = (event) => {
    const newValue = event.target.value;
    manager.updateTitle(newValue);
  };

  return (
    <input
      value={value}
      onChange={onChangeHandler}
    />
  );
}