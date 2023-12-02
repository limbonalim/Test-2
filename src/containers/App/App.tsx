import Toolbar from '../../components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import NewQuote from '../../components/NewQuote/NewQuote';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <h1>1</h1>
          )}/>
          <Route path="/add-quote" element={(
            <NewQuote/>
          )}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
