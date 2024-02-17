import { Component } from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { Btn } from "../Button/Button";

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
                <Btn type="submit"><CgPlayListAdd size={50}/></Btn>           
            </form>
        )
    }
}