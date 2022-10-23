import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, {useState} from 'react'

const ExpenseItem = (props) => {

const [title, setTitle] =  useState(props.title)

  let title =props.title

  const clickHandler = () => {
    console.log('Clicked!!1');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} >Change title </button>
    </Card>
  );
}

export default ExpenseItem;
 