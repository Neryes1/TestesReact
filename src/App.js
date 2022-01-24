import React from "react";
import Expenses from './components/Expenses/Expenses';

function App(){
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.12,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurence',
      amount: 245.99,
      date: new Date(2021, 5, 12)
    },
    
  ]
  return(
    <Expenses items={expenses} />
  );
}

export default App;