import React from 'react';
import {useParams} from 'react-router-dom';
import QuoteItem from './QuoteItem';

const QuoteList = () => {
  const params = useParams()
  return (
    <div>
      <QuoteItem message="kwfjwekpfjweknmcfkwemcklwemnclweknmdl" author="dklfjsdklfjsdklfjkl"/>
    </div>
  );
};

export default QuoteList;