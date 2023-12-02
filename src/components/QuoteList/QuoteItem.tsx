import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  author: string;
  message: string;
  id: string;
  onDelete: (id: string) => void;
}

const MemoQuoteItem: React.FC<Props> = React.memo(function QuoteItem({message, author, id, onDelete}) {
  return (
    <div className="border border-2 border-info rounded d-flex justify-content-between p-3">
      <div>
        <p>{message}</p>
        <span className="fw-bold">- {author}</span>
      </div>
      <div>
        <button className="btn btn-outline-danger m-2" onClick={() => onDelete(id)}>Delete</button>
        <Link to="/" className="btn btn-outline-info">Edit</Link>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.author === nextProps.author && prevProps.message === nextProps.message;
});

export default MemoQuoteItem;