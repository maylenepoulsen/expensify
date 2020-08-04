import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {console.log(props)}    
  </div>    
)

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses    
  } 
}

export default connect(mapStateToProps)(ExpenseList)

