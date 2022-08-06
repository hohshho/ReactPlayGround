import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // render components
    let expenseComponents = <p>No Items</p>;

    if (filterExpenses.length > 0) {
        expenseComponents = filterExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter item={props.items} onChangeFilter={changeFilterHandler} selected={filteredYear} />
                {expenseComponents}
            </Card>
        </div>
    );
};

export default Expenses;
