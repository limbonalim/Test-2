import {Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import {Alert} from 'react-bootstrap';
import Toolbar from '../../components/Toolbar/Toolbar';
import Home from '../Home/Home';
import QuoteList from '../../components/QuoteList/QuoteList';
import AddQuote from '../AddQuote/AddQuote';

const App = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getError = (message: string) => {
    setShowAlert(true);
    setError(message);
  };
  return (
    <>
      <Alert show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {error}
        </p>
      </Alert>
      <header>
        <Toolbar/>
      </header>
      <main className="my-5 container">
        <Routes>
          <Route path="/" element={(
            <Home getError={getError}/>
          )}>
            <Route path="quotes/:category" element={(
              <QuoteList getError={getError}/>
            )}/>
          </Route>
          <Route path="/quotes/:id/edit" element={(
            <AddQuote getError={getError}/>
          )}/>
          <Route path="/add-quote" element={(
            <AddQuote getError={getError}/>
          )}/>
          <Route path="*" element={<h1>404 Not Found!</h1>}/>
        </Routes>
      </main>
    </>
  );
};

export default App;
