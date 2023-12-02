import React from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import QuoteList from '../../components/QuoteList/QuoteList';

const Home = () => {
  const params = useParams();
  return (
    <div className="row">
      <div className="col-3">
        <div className="list-group">
          <NavLink to="/" className="list-group-item">All</NavLink>
          <NavLink to="quotes/star-wars" className="list-group-item">Star Wars</NavLink>
          <NavLink to="quotes/motivational" className="list-group-item">Motivational</NavLink>
          <NavLink to="quotes/famous-people" className="list-group-item">Famous People</NavLink>
          <NavLink to="quotes/humour" className="list-group-item">Humour</NavLink>
          <NavLink to="quotes/philosophy" className="list-group-item">Philosophy</NavLink>
        </div>
      </div>
      <div className="col-9">
        {params.category ? null : <QuoteList/>}
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;