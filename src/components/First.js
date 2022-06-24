import React, { Component } from 'react'
import axios from 'axios';
export class First extends Component {
     // Constructor 
     constructor(props) {
      super(props);
 
      this.state = {
        persons: [],
        
      };
  }
 




  // componentDidMount() {
  //   axios.get(`https://reqres.in/api/users/`)
  //     .then(res => {
  //       console.log(res.data);
  //       var persons = res.data.data;
  //       this.setState({ persons });
  //       console.log(persons);
  //       // alert(persons);
  //     })
  // }





handleSearch = (e)=>{

  var searchdata = document.getElementById('number').value;
  // alert(searchdata);
  
if(searchdata<=12){
  this.setState({
    Load: true,

  });
  var sendId = {
    _id: searchdata,
    // userid: sessionStorage.getItem('userid'),
  }
  try {
    axios.get(`https://reqres.in/api/users/${searchdata}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => {
        //alert(res.data);
        // console.log/(res.status);
        console.log(res);
        var  persons= res.data.data;
        console.log(persons);
        this.setState({ persons: [res.data.data]});
        
        // if (res.data.msg == 'success') {

        //   console.log("success");
        //   window.location.reload();


        // } else {

        //   console.log("failure");

        // }

        this.setState({
          Load: false,

        });

      })
  } catch (error) {

    console.log(error)
    this.setState({
      Load: false,
    });
    console.log("internal server error");
  }

}
else{
  alert(`number ${searchdata} is not available.`);
}
  
}

  render() {
   
  
   
    return (
      <div>
 <div class="alert alert-success" role="alert">
<center><h1>  User List </h1></center>
</div>
<div><br></br></div>
<div><br></br></div>

<center>
<form>
  <div className="mb-3"class="col-sm-6">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Enter Number</label> */}
    <input type="number" className="form-control"onChange={this.handleSearch} id="number" placeholder='Enter User Id '  onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }}/>
    

  </div>

 <div><br></br></div>
  
</form>




</center>

<div><br></br></div>

<div><br></br></div>
<center>
  <div className="mb-3"class="col-sm-6">
<table class="table">
  <thead class="thead-dark" >
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name </th>
      <th scope="col">Last Name </th>
      <th scope="col"> Email </th>
      <th scope="col">  Avtar  </th>
    </tr>
  </thead>
  
  <tbody>
  {
                            this.state.persons
                              .map((person ,i)=>


          
    <tr>
    
   
      <th scope="row">{person.id}</th>
      <th>{person.first_name}</th>
      <td>{person.last_name}</td>
      <td>{person.email}</td>
      <td><img src={person.avatar} height={"70px"} width={"70px"} alt=" Offer Now  image"></img></td>
 
   

     
    </tr>



)}  </tbody>
</table>

</div>
</center>



 



    </div>
    )
  }
}

export default First