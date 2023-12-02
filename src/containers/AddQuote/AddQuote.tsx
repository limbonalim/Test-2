import React, {useEffect, useState} from 'react';
import QuoteForm from '../../components/QuoteForm/QuoteForm';
import {ApiQuotes} from '../../types';
import axiosApi from '../../axios-api';
import {useNavigate, useParams} from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

interface Props {
  getError: (message: string) => void;
}

const AddQuote: React.FC<Props> = ({getError}) => {
  const [editQuote, setEditQuote] = useState<ApiQuotes>({
    category: '',
    author: '',
    text: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('Add Quote');
  const navigate = useNavigate();
  const params = useParams();


  const onSubmit = async (quote: ApiQuotes) => {
    try {
      setLoading(true);
      await axiosApi.post<ApiQuotes>('/quotes.json', quote);
      navigate('/');
    } catch (error: Error) {
      getError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onEdit = async (quote: ApiQuotes) => {
    try {
      setLoading(true);
      await axiosApi.put<ApiQuotes>(`/quotes/${params.id}.json`, quote);
      navigate('/');
    } catch (error: Error) {
      getError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getQuote = async () => {
    try {
      setLoading(true);
      setTitle('Edit Quote');
      const response = await axiosApi.get<ApiQuotes>(`/quotes/${params.id}.json`);
      setEditQuote(response.data);
    } catch (error: Error) {
      getError(error.message);
    } finally {
      setLoading(false);
    }
  };


    useEffect(() => {
      if (params.id) {
        void getQuote();
      }
    }, [params.id]);


  return (
    <>
      {loading ? <Loading/> :
        <>
          <h1 className="mb-3">{title}</h1>
          <QuoteForm onSubmit={onSubmit} editQuote={editQuote} onEdit={onEdit}/>
        </>
      }
    </>
  );
};

export default AddQuote;