import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], inputVal: ""};
        this.addItem = this.addItem.bind(this);
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

    render() {
        let list = this.state.items.map((ele, i) => <li key={i}>{ele}</li>)
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter a task" onChange={this.update()} value={this.state.inputVal}/>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }

}

export default TodoList;