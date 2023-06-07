import React, { Component } from 'react'

export class FormsClass extends Component {

  constructor() {
    super()

    this.state = {
      textValue: 'Hello',
      isValid: false,
      selectedValue: "Seattle"
    }
  }

  handleChange = (e) =>{
    let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value
    console.log(targetType)
    console.log(e.target.name)
    let name = e.target.name
    this.setState({[name]: targetType})
  }

   handleSubmit = (e) => {
    e.preventDefault() //prevents form from navigating away

    //send data to db
    let dataObj = {
      textValue: this.state.textValue,
      isValid: this.state.isValid,
      selectValue: this.state.selectedValue
    }
    console.log('form was submitted', dataObj)
  }

  render() {
    const {textValue} = this.state.textValue
    return (
      <>
      <h1>React Forms using Classes</h1>
      <h2>{this.state.textValue}</h2>
      <h2>{this.state.isValid ? "true" : "false"}</h2>
      <h2>{this.state.selectedValue}</h2>
      <form action="">
        <input type="text" name="textValue" value={textValue} onChange={this.handleChange} />
        <input type="checkbox" name='isValid' value={this.state.isValid} onChange={this.handleChange} />
        <br />
        <br />
        <select name="selectedValue" value={this.state.selectedValue} onChange={this.handleChange} id="">
                <option value="NewYork">New York</option>
                <option value="Houston">Houston</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Seattle">Seattle</option>
                <option value="Detroit">Detroit</option>
        </select>
      </form>
      
      </>
    )
  }
}

export default FormsClass