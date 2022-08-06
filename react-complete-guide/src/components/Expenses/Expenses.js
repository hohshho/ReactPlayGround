import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';

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
                <ExpenseFilter item={props.items} onChangeFilter={changeFilterHandler} selected={filteredYear} />
                <ExpenseList items={filterExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
