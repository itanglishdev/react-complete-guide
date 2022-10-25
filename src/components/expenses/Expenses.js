import ExpenseItem from './ExpenseItem';
import '../../index.css'
import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './newExpense/ExpenseFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense, idx) => (
          <ExpenseItem
            key={idx}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />))
        }
      </Card>
    </div>
  )
}

export default Expenses;