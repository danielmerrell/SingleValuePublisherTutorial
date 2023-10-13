import logo from './logo.svg';
import './App.css';
import { BoxComponent } from './components/BoxComponent';
import { InputComponent } from './components/InputComponent';
import { ManagerContextProvider } from './manager-context';

function App() {
  return (
    <ManagerContextProvider>
      <InputComponent />
      <InputComponent />
      <InputComponent />
    </ ManagerContextProvider>
  );
}

export default App;
