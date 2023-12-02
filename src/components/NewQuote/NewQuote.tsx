import React from 'react';

const NewQuote = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category:</label>
        <select
          required
          id="category"
          name="category"
          className="form-select"
          aria-label="Category"
        >
          <option value="" selected>Select Category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author:</label>
        <input
          required
          type="text"
          className="form-control"
          id="author"
          name="author"
          placeholder="Jhon Smit"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="quote" className="form-label">Quote message:</label>
        <textarea
          required
          className="form-control"
          id="quote"
          name="quote"
          placeholder="Message"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
};

export default NewQuote;