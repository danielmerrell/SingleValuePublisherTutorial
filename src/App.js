import './App.css';
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
