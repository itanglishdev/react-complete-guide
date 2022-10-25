import { render } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

function AddNewExpense(props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData)
      };

const openUpMenuHandler =()=>{
console.log('_CLICKED');
    render ()
        return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

}

    return (
        <button onClick={openUpMenuHandler}>Add new Item</button>
      );
}

export default AddNewExpense;