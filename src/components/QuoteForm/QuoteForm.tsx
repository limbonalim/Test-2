import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from 'react';
import {categories} from '../../constans';
import {ApiQuotes, Constants} from '../../types';
import {useParams} from 'react-router-dom';

interface Props {
  onSubmit: (quote: ApiQuotes) => void;
  onEdit: (quote: ApiQuotes) => void;
  editQuote?: ApiQuotes;
}

const MemoQuoteForm: React.FC<Props> = React.memo(function QuoteForm({onSubmit, onEdit, editQuote}) {
  const [post, setPost] = useState<ApiQuotes>({
    author: '',
    category: '',
    text: '',
  });
  const [button, setButton] = useState<string>('Add');

  let params = useParams();
  console.log(params);

  if (params.id) {
    const getEditPost = useCallback(() => {
      setButton('Edit');
      setPost(prevState => {
        return {
          ...prevState,
          author: editQuote.author,
          category: editQuote.category,
          text: editQuote.text
        };
      });

    }, [editQuote.author, editQuote.text]);
    useEffect(() => {
      void getEditPost();
    }, [getEditPost]);
  }


  const listOfOptions = categories.map((item: Constants) => (
    <option key={item.id} value={item.id}>{item.title}</option>
  ));

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = event.target;
    setPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (editQuote.author && editQuote.text) {
      onEdit(post);
    } else {
      onSubmit(post);
    }
    setPost(
      {
        author: '',
        category: '',
        text: '',
      }
    );
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <select
          onChange={onChange}
          value={post.category}
          defaultValue=""
          required
          id="category"
          name="category"
          className="form-select"
          aria-label="Category"
        >
          <option value="" disabled>Select Category</option>
          {listOfOptions}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author:</label>
        <input
          onChange={onChange}
          value={post.author}
          required
          type="text"
          className="form-control"
          id="author"
          name="author"
          placeholder="Jhon Smit"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">Quote message:</label>
        <textarea
          onChange={onChange}
          value={post.text}
          required
          className="form-control"
          id="text"
          name="text"
          placeholder="Message"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-outline-success">{button}</button>
    </form>
  );
});

export default MemoQuoteForm;