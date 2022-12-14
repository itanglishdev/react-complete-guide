import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setIsEditing(false)
    props.onAddExpense(expenseData)
  };

  const startEditingHandler =() => {
    setIsEditing(true)  
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new Item</button>}
     
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;
