import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpenses(expenseData);
        setIsEditing(false);
    };

    const isEditingHandler = (isEditing) => {
        setIsEditing((prevIsEditing) => {
            return !prevIsEditing;
        });
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm
                    isEditing={isEditing}
                    onIsEditing={isEditingHandler}
                    onSaveExpenseData={SaveExpenseDataHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
