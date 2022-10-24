import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense() {
     
  const onSaveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
  };

  return (
    <div className="new-expense">
      <form>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </form>
    </div>
  );
}

export default NewExpense;
