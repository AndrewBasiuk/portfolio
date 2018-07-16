import React, { Component } from 'react';
import {TaskList} from './TaskList';


export class InputTodo extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      term: ' ',
	      data: []
	    };

	    this.onChange = this.onChange.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	};

	onChange(e) {
	    this.setState({term: e.target.value});
	}

	onSubmit(e) {
	    e.preventDefault();
	    this.setState({
	      term: ' ',
	      data: [...this.state.data, this.state.term]
	    });
	}

	render() {
	    return (
	      <div className="todo-wrap">
	          <form className="todo-form" onSubmit = {this.onSubmit}>
	            <input type="text" placeholder="Write something here..." value={this.state.term} onChange={this.onChange}/>
	            <button className="todo-form-button" type="submit" onClick = {this.onSubmit}>Add task</button>
	          </form>
          <TaskList items={this.state.data}></TaskList>

	      </div>
	    );
	}
}

export default InputTodo;
