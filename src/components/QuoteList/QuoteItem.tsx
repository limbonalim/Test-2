import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  author: string;
  message: string;
  onDelete: () => void;
}

const QuoteItem:React.FC<Props> = ({message, author, onEdit, onDelete}) => {
  return (
    <div className="border border-2 border-info rounded d-flex justify-content-between p-3">
      <div>
        <p>{message}</p>
        <span className="fw-bold">- {author}</span>
      </div>
      <div>
        <button className="btn btn-outline-danger m-2">Delete</button>
        <Link to="/" className="btn btn-outline-info">Edit</Link>
      </div>
    </div>
  );
};

export default QuoteItem;