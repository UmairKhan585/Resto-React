import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash} from "@fortawesome/free-solid-svg-icons";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    fetch("http://localhost:5000/restaurants").then((result) => {
        result.json().then((resp) => {
          // console.log(resp)
          this.setState({ list: resp });
        });
      });
  }

  delete(id){
    fetch("http://localhost:5000/restaurants/"+id,{
        method:'DELETE',
      }).then((result) => {
        result.json().then((resp) => {
          console.log(resp)
          alert("Restaurant has been deleted successfully...")
          this.getData()
        });
      });
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Rating</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td><Link to={'/update/'+item.id}><FontAwesomeIcon icon={faEdit}/></Link>
                    <span onClick={()=>this.delete(item.id)}style={{backgroundColor:'transparent',margin:'0',padding:'10px',color:'red'}}><FontAwesomeIcon icon={faTrash}/></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait for Loading...</p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
