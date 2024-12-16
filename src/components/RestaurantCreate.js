import React, { Component } from 'react'

class RestaurantCreate extends Component {
  constructor(){
    super();
    this.state={
      id:null,
      name:'',
      email:'',
      address:'',
      rating:''
    }
  }

  create(){
    // console.log(this.state)
    fetch("http://localhost:5000/restaurants",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        alert("Restaurant has been added successfully...")
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <input onChange={(event)=>this.setState({id:event.target.value})} placeholder='Restaurant Id'/><br/><br/>
        <input onChange={(event)=>this.setState({name:event.target.value})} placeholder='Restaurant Name'/><br/><br/>
        <input onChange={(event)=>this.setState({email:event.target.value})} placeholder='Restaurant Email'/><br/><br/>
        <input onChange={(event)=>this.setState({address:event.target.value})} placeholder='Restaurant Address'/><br/><br/>
        <input onChange={(event)=>this.setState({rating:event.target.value})} placeholder='Restaurant Rating'/><br/><br/>
        <button onClick={()=>this.create()}>Add Restaurant</button>
      </div>
    )
  }
}

export default RestaurantCreate
