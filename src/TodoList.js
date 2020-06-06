import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], inputVal: ""};
        this.addItem = this.addItem.bind(this);
        this.update = this.update.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    update(e) {
        return e => this.setState({inputVal: e.currentTarget.value})
    }

    addItem(e) {
        e.preventDefault();
        let newItem = [this.state.inputVal];
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
        });
        this.setState({inputVal: ""});
    }

    removeItem(key) {
        let filteredItems = this.state.items.filter((ele) => ele !== key);
        this.setState({items: filteredItems});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter a task" onChange={this.update()} value={this.state.inputVal}/>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    <TodoListItem entries={this.state.items} delete={this.removeItem}/>
                </ul>
            </div>
        )
    }

}

export default TodoList;