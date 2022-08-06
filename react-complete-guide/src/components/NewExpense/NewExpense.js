import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [amountInputForm, setAmountInputForm] = useState(true);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpenses(expenseData);
    };

    const addAmountHandler = (amountInputForm) => {
        setAmountInputForm((prevAmountInputForm) => {
            return !prevAmountInputForm;
        });
    };

    return (
        <div className="new-expense">
            <ExpenseForm
                amountInputForm={amountInputForm}
                onAddAmount={addAmountHandler}
                onSaveExpenseData={SaveExpenseDataHandler}
            />
        </div>
    );
};

export default NewExpense;
