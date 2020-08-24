import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ])
})

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Test add expense',
    note: '',
    amount: 25000,
    createdAt: 24000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  } 
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense]) 
})

test('should edit an expense', () => {
  const note = 'Last month of rent payments'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].note).toBe(note)
})

test('should not edit and expense if expense is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '4',
    updates: {
      note: 'Should not be editing this expense'
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})