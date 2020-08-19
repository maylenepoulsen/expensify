import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '5678dance'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '5678dance'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('5678dance', { note: 'New note added to expense' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '5678dance',
    updates: {
      note: 'New note added to expense'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 179500,
    note: 'August rent for beach house',
    createdAt:  1000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }    
  })
})