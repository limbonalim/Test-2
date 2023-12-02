import React, {ChangeEvent, FormEvent, useState} from 'react';
import {categories} from '../../constans';
import {ApiQuotes, Constants} from '../../types';

interface Props {
  onSubmit: (quote: ApiQuotes) => void;
}

const QuoteForm: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<ApiQuotes>({
    author: '',
    category: '',
    text: '',
  });

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
    onSubmit(post);
    setPost(prevState => {
      return {
        author: '',
        category: '',
        text: '',
      };
    });
    event.target[0].value = '';
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <select
          onChange={onChange}
          required
          id="category"
          name="category"
          className="form-select"
          aria-label="Category"
          defaultValue=""
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
      <button className="btn btn-outline-success">Add</button>
    </form>
  );
};

export default QuoteForm;