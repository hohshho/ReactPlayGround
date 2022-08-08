import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter onChangeFilter={changeFilterHandler} selected={filteredYear} />
                <ExpensesChart expenses={filterExpenses} />
                <ExpenseList items={filterExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
