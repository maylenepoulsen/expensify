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

store.dispatch(addExpense({ description: 'Water Bill', amount: 10900 }))
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }))
store.dispatch(addExpense({ description: 'Rent', amount: 179500 }))

const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters)
console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter /> 
  </Provider>
     
)

ReactDOM.render(jsx, document.getElementById('app'));