import React from 'react';

class TodoListItem extends React.Component{
    
    render() {
        let items = this.props.entries;
        let listItems = items.map((item, i) => <li key={i}>
            {item}
            <button onClick={() => this.props.delete(item)}>Remove</button>
            </li>);
        return (
            <div>
            {listItems}
            </div>
        )
    }
}

export default TodoListItem;