import './App.css';
import Header from '../Header/Header';
import Title from '../Title/Title';
import AppNav from '../AppNav/AppNav';
import Main from '../Main/Main';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Title />
      <AppNav />
      <Main />
    </div>
  );
}
