import React from "react"

class TodoItem extends React.Component {
  render() {
    return(
        <li>
            <input
                type="checkbox"
                checked={this.props.todo.completed}
                handleChangeProps={this.props.handleChangeProps}
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
            />
        </li>
    )
  }
}

export default TodoItem