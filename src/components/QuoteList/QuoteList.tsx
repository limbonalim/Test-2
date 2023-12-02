import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MemoQuoteItem from './QuoteItem';
import axiosApi from '../../axios-api';
import {ApiQuotes, Quotes} from '../../types';


const QuoteList = () => {
  const params = useParams();
  let url: string = '/quotes.json';
  const [quotes, setQuotes] = useState<Quotes[]>([]);

  if (params.category) {
    url = `/quotes.json?orderBy="category"&equalTo="${params.category}"`;
  }

  const getItems = useCallback(async () => {
    try {
      const response = await axiosApi.get<ApiQuotes>(url);
      const listOfItems: Quotes[] = [];
      for (let item in response.data) {
        const newItem = {...response.data[item], id: item};
        listOfItems.push(newItem);
      }
      setQuotes(listOfItems);
    } catch (error: Error) {
      console.log(error);
    }
  }, [params]);

  useEffect(() => {
    void getItems();
  }, [getItems]);

  const onDelete = async (id: string) => {
    try {
      await axiosApi.delete(`/quotes/${id}.json`);
    } catch (error: Error) {
      console.log(error);
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
      {list}
    </div>
  );
};

export default QuoteList;