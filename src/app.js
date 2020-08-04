import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 109 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 35 }))

store.dispatch(setTextFilter('gas'))

console.log(store.getState())

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter /> 
  </Provider>
     
)

ReactDOM.render(jsx, document.getElementById('app'));