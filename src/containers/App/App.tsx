import Toolbar from '../../components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import Home from '../Home/Home';
import QuoteList from '../../components/QuoteList/QuoteList';
import AddQuote from '../AddQuote/AddQuote';

const App = () => {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="my-5 container">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}>
            <Route path="quotes/:category" element={(
              <QuoteList/>
            )}/>
          </Route>
          <Route path="/quotes/:id/edit" element={(
            <AddQuote title="Edit Quote"/>
          )}/>
          <Route path="/add-quote" element={(
            <AddQuote/>
          )}/>
          <Route path="*" element={<h1>404 Not Found!</h1>}/>
        </Routes>
      </main>
    </>
);
};

export default App;
