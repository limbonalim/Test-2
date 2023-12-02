import React from 'react';
import {NavLink, Outlet, useParams} from 'react-router-dom';
import QuoteList from '../../components/QuoteList/QuoteList';
import {categories} from '../../constans';
import {Constants} from '../../types';

interface Props {
  getError: (message: string) => void;
}

const Home: React.FC<Props> = ({getError}) => {
  const params = useParams();
  const listOfLink = categories.map((item: Constants) => {
    const link: string = `quotes/${item.id}`;
    return (
      <NavLink key={item.id} to={link} className="list-group-item">{item.title}</NavLink>
    );
  });
  return (
    <div className="row">
      <div className="col-4">
        <div className="list-group">
          <NavLink to="/" className="list-group-item">All</NavLink>
          {listOfLink}
        </div>
      </div>
      <div className="col-8">
        {params.category ? null : <QuoteList getError={getError}/>}
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;