import './App.css';
import { DisplayComponent } from './components/DisplayComponent';
import { InputComponent } from './components/InputComponent';
import { ManagerContextProvider } from './manager-context';

function App() {
  return (
    <ManagerContextProvider>
      <InputComponent />
      <InputComponent />
      <InputComponent />
      <DisplayComponent />
    </ ManagerContextProvider>
  );
}

export default App;
