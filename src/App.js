import logo from './logo.svg';
import './App.css';
import SignupButton from './SignupButton';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SignupButton />
        <h1> husky eslint setup</h1>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
