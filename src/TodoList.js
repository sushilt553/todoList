import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.addItem}>
                <input type="text" placeholder="Enter a task" />
                <button type="submit">Add</button>
            </form>
        )
    }

}

export default TodoList;