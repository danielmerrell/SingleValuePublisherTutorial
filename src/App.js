import logo from './logo.svg';
import './App.css';
import { BoxComponent } from './components/BoxComponent';
import { InputComponent } from './components/InputComponent';
import { ManagerContextProvider } from './manager-context';

function App() {
  return (
    <ManagerContextProvider>
      <InputComponent />
      <BoxComponent />
      <BoxComponent />
      <BoxComponent />
    </ ManagerContextProvider>
  );
}

export default App;
