import React, { Component } from "react";
import { useParams } from "react-router-dom";

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: "",
      email: "",
      address: "",
      rating: "",
    };
  }

  componentDidMount(){
    const {id} = this.props.params;
    this.fetchRestaurantDetails(id)
  }

  fetchRestaurantDetails(id){
    fetch("http://localhost:5000/restaurants/"+id).then((result) => {
        result.json().then((resp) => {
          // console.log(resp)
          this.setState({ id: resp.id })
          this.setState({ name: resp.name })
          this.setState({ email: resp.email })
          this.setState({ address: resp.address})
          this.setState({ rating: resp.rating })
        });
      });
  }

  update(id){
    fetch("http://localhost:5000/restaurants/"+id,{
        method:'PUT',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
      }).then((result) => {
        result.json().then((resp) => {
          console.log(resp)
          alert("Restaurant has been updated successfully...")
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Restaurant Update</h1>
        <input value={this.state.id} disabled
          placeholder="Restaurant Id"
        />
        <br />
        <br />
        <input value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
          placeholder="Restaurant Name"
        />
        <br />
        <br />
        <input value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
          placeholder="Restaurant Email"
        />
        <br />
        <br />
        <input value={this.state.address}
          onChange={(event) => this.setState({ address: event.target.value })}
          placeholder="Restaurant Address"
        />
        <br />
        <br />
        <input value={this.state.rating}
          onChange={(event) => this.setState({ rating: event.target.value })}
          placeholder="Restaurant Rating"
        />
        <br />
        <br />
        <button onClick={() => this.update(this.state.id)}>Update Restaurant</button>
      </div>
    );
  }
}

export default (props)=> <RestaurantUpdate {...props} params={useParams()}/>;
