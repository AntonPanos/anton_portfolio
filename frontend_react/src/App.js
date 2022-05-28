import { About, Footer } from './container';
import { images } from './constants';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <About />
      <Footer />
      <img src={images.logo} alt='logo' />
    </div>
  );
};

export default App;
