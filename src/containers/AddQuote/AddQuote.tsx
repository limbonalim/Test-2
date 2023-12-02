import React from 'react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import {ApiQuotes} from '../../types';
import axiosApi from '../../axios-api';

const AddQuote = () => {

  const onSubmit = async (quote: ApiQuotes) => {
    try {
      await axiosApi.post('/quotes.json', quote);
    } catch (error: Error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="mb-3">New Quote</h1>
      <QuoteForm onSubmit={onSubmit}/>
    </>
  );
};

export default AddQuote;