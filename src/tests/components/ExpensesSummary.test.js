import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with no expenses correctly', () => {
    const expensesEmpty = [];
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={14500} />);
    expect(wrapper).toMatchSnapshot();
});
