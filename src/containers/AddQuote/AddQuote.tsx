import React, {useEffect, useState} from 'react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import {ApiQuotes} from '../../types';
import axiosApi from '../../axios-api';
import {useNavigate, useParams} from 'react-router-dom';

interface Props {
  title?: string;
}

const AddQuote: React.FC<Props> = ({title = 'New Quote'}) => {
  const [editQuote, setEditQuote] = useState<ApiQuotes>({
    category: '',
    author: '',
    text: '',
  })
  const params = useParams();
  const navigate = useNavigate();


  if (params.id) {
    const getQuote = async () => {
      try {
        const response = await axiosApi.get<ApiQuotes>(`/quotes/${params.id}.json`);
        setEditQuote(response.data);
      } catch (error: Error) {
        console.log(error);
      }
    };
    useEffect(() => {
      void getQuote();
    }, []);
  }

  const onSubmit = async (quote: ApiQuotes) => {
    try {
      await axiosApi.post<ApiQuotes>('/quotes.json', quote);
      navigate('/');
    } catch (error: Error) {
      console.log(error);
    }
  };

  const onEdit = async (quote: ApiQuotes) => {
    try {
      await axiosApi.put<ApiQuotes>(`/quotes/${params.id}.json`, quote);
      navigate('/');
    } catch (error: Error) {
      console.log(error)
    }
  };

  return (
    <>
      <h1 className="mb-3">{title}</h1>
      <QuoteForm onSubmit={onSubmit} editQuote={editQuote} onEdit={onEdit}/>
    </>
  );
};

export default AddQuote;