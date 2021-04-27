import react from "react";
import "./styles.css";
import trash from "../public/images/trash.svg";
// React.InputHTMLAttributes<HTMLInputElement>.disabled?: boolean
var todoListItems = [];
class Todolist extends react.Component {
  render() {
    return (
      <li value={this.props.index}>
        <div>
          <input
            type="text"
            value={this.props.item}
            index={this.props.index}
            className="todo_item_value"
            name="todo_item_box"
            disabled
          />
          <input
            value={this.props.index}
            className="todo_remove_items"
            type="image"
            src={trash}
            alt="Trash"
            onClick={this.props.RemoveEvent}
          />
        </div>
      </li>
    );
  }
}
export default class todo extends react.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", todoItems: todoListItems };
    this.changeHandler = this.changeHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodoItem = this.removeTodoItem.bind(this);
  }
  // Remove Item
  removeTodoItem(e) {
    var todoItemIndex = e.target.value;
    todoListItems.splice(todoItemIndex, 1);
    this.setState({
      todoItems: todoListItems
    });
  }

  // Change Handler Start
  changeHandler(event) {
    var todoItemValue = event.target.value;
    this.setState({
      value: todoItemValue
    });
  }
  // Change Handle End

  // Add Todo Item
  addTodo() {
    var todoValue = this.state.value;
    todoListItems.push(todoValue);
    this.setState({
      todoItems: todoListItems,
      value: ""
    });
  }
  render() {
    return (
      <div className="mainDiv">
        <span style={{ fontWeight: 600 }}> Todo </span>
        <div>
          <ul>
            {todoListItems.map((items, index) => {
              return (
                <Todolist
                  item={items}
                  index={index}
                  RemoveEvent={this.removeTodoItem}
                />
              );
            })}
          </ul>
        </div>
        <span>
          <b>Enter your todo </b>
          <input
            type="text"
            value={this.state.value}
            name="todo_input"
            onChange={this.changeHandler}
          />
          <button type="submit" className="todo_Add_btn" onClick={this.addTodo}>
            ADD
          </button>
        </span>
      </div>
    );
  }
}
