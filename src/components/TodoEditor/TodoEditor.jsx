import { Component } from "react";

export class TodoEditor extends Component{
    state={
        textValue: '',
    }

    handleChange = (e)=> {
        this.setState({textValue: e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.textValue)
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Напишіть свою задачу                    
                    <textarea value={this.state.textValue} onChange={this.handleChange}/>                    
                </label>
                <button type="submit">Create</button>           
            </form>
        )
    }
}