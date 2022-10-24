import './ExpenseForm.css'
import {useState} from 'react'

function ExpenseForm() {

  const [enterdAmount, setEnteredAmount] = useState('')
  const [enteredTitle, setEnteredTitle] = useState('')
  const [eneteredDate, setEnteredDate] = useState('')

  // useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   ênteredDate:''
  // })


const titleChangeHandler = (event)=>{
setEnteredTitle(event.target.value)
}

const amountChangeHandler = (event) => {
  
setEnteredAmount(event.target.value)
}

const dateChangeHandler = (event) => {
setEnteredDate(event.target.value)
}

    return (
        <form>
          <div className='new-expense__controls'>
           <div className='new-expense__control'>
            <label for="">Title</label>
            <input type="text"onChange={titleChangeHandler} />            
           </div>
           <div className='new-expense__control'>
            <label for="">Amount</label>
            <input type="number" min='0.01' step='0.01' onClick={amountChangeHandler}/>            
           </div>
           <div className='new-expense__control'>
            <label for="">Date</label>
            <input type="date" min='2019-01-01' max='2022-12-31' onClick={dateChangeHandler} />            
           </div>
          </div>
          <div className='new-expenses__action' >
            <button type="">Add expense</button>
          </div>
        </form>
      );
}

export default ExpenseForm;