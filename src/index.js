import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<TodoList />, root);
})