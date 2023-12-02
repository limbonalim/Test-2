import Toolbar from '../../components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import NewQuote from '../../components/NewQuote/NewQuote';
import Home from '../Home/Home';
import QuoteList from '../../components/QuoteList/QuoteList';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}>
            <Route path="quotes/:categoty" element={(
              <QuoteList/>
            )}/>
          </Route>

          <Route path="/add-quote" element={(
            <NewQuote/>
          )}/>
        </Routes>
      </main>
    </>
);
};

export default App;
