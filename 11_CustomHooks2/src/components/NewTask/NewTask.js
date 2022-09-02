import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import { url } from '../../Url';
import useHttp from '../../hooks/use-https';

const NewTask = (props) => {
    const { isLoading, error, sendRequest } = useHttp();

    const createdTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };

    const enterTaskHandler = async (taskText) => {
        sendRequest(
            {
                url,
                method: 'POST',
                body: JSON.stringify({ text: taskText }),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            createdTask.bind(null, taskText),
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
