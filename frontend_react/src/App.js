import { Navbar } from './components';
import { Header, About, Work, Skills } from './container';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </div>
  );
};

export default App;
