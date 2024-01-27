import { Component } from "react";

export class Form extends Component{
    state={
        name: '',
        tel: '',
        level: '',
        lisence: false
      }
    
      handleNameChange=(e)=>{
        const {name, value} = e.currentTarget
          this.setState({
            [name]: value
          })
      }
    
      handleRadioChange=(e)=>{    
        this.setState({
          level: e.currentTarget.name
        })
    
      }
    
    handleCheckboxChange=()=>{
      this.setState(prevState=>({lisence: !prevState.lisence}))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
    
      render(){
        return(
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input type="text" name='name' value={this.state.name} onChange={this.handleNameChange}/>
            </label>
                <br />
            <label>Phone number
              <input type="tel" name='tel' value={this.state.tel} onChange={this.handleNameChange}/>
            </label>
            <hr />
    
            <label>
              junior
              <input type="radio" name='junior' 
                  checked={this.state.level === 'junior'}
                  onChange={this.handleRadioChange}/>
            </label>
            <label>
              middle
              <input type="radio" name='middle' 
                  checked={this.state.level === 'middle'}
                  onChange={this.handleRadioChange}/>
            </label>
            <label>
              senior
              <input type="radio" name='senior' 
                  checked={this.state.level === 'senior'}
                  onChange={this.handleRadioChange}/>
            </label>
    <hr />
            <label>
              <input type="checkbox" 
                checked={this.state.lisence} 
                name='lisence'
                onChange={this.handleCheckboxChange}/>
              Погоджуюсь з умовами договору</label>
              <hr />
              <button type="submit">Submit</button>
          </form>      
          </div>
        )
      }
}