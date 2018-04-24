import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    let message = '';
    if (expenseCount) {
        const expenseWord = expenseCount === 1? 'expense' : 'expenses';
        const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
        message = `Viewing ${expenseCount} ${expenseWord} totaling ${formatedExpensesTotal}`;
    }  
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);