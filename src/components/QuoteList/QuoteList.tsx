import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MemoQuoteItem from './QuoteItem';
import axiosApi from '../../axios-api';
import Loading from '../Loading/Loading';
import {ApiQuotes, Quotes} from '../../types';

interface Props {
  getError: (message: string) => void;
}


const QuoteList: React.FC<Props> = ({getError}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams();
  let url: string = '/quotes.json';
  const [quotes, setQuotes] = useState<Quotes[]>([]);

  if (params.category) {
    url = `/quotes.json?orderBy="category"&equalTo="${params.category}"`;
  }

  const getItems = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get<ApiQuotes>(url);
      const listOfItems: Quotes[] = [];
      for (let item in response.data) {
        const newItem = {...response.data[item], id: item};
        listOfItems.push(newItem);
      }
      setQuotes(listOfItems);
    } catch (error: Error) {
      getError(error.message);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    void getItems();
  }, [getItems]);

  const onDelete = async (id: string) => {
    try {
      setLoading(true);
      await axiosApi.delete(`/quotes/${id}.json`);
      void getItems();
    } catch (error: Error) {
      getError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const list = quotes.map((item) => (
    <MemoQuoteItem
      key={item.id}
      id={item.id}
      author={item.author}
      message={item.text}
      onDelete={onDelete}
    />));

  return (
    <div className="d-flex flex-column gap-2">
      {loading ? <Loading/> : list}
    </div>
  );
};

export default QuoteList;