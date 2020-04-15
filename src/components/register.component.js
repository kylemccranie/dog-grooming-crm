import React, {Component} from 'react';

export default class Register extends Component{

  constructor(props){
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeBusinessname = this.onChangeBusinessname.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username:"",
      firstname:"",
      lastname:"",
      businessname:"",
      password:"",
    }

}

    onChangeUsername(e){
      this.setState({
        username : e.target.value
      });
    }

    onChangeFirstname(e){
      this.setState({
        firstname:e.target.value
      });
    }

    onChangeLastname(e){
      this.setState({
        lastname:e.target.value
      });
    }

    onChangeBusinessname(e){
      this.setState({
        businessname:e.target.value
      });
    }

    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();

      const newUser = {
        username:this.state.username,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        businessname:this.state.businessname,
        password:this.state.password,
      };

      this.setState ({
        username:"",
        firstname:"",
        lastname:"",
        businessname:"",
        password:"",
      })



  }

  render(){
    return(
      <div>
        <h3>Register</h3>
        <form onSubmit = {this.onSubmit}>
          <div className = "form-group">
            <label>Username: </label>
              <input type = "text" required className = "form-control" value = {this.state.username} onChange = {this.onChangeUsername}/>
          </div>
          <div className = "form-group">
            <label>Firstname: </label>
              <input type = "text" required className = "form-control" value = {this.state.firstname} onChange = {this.onChangeFirstname}/>
          </div>
          <div className = "form-group">
            <label>Lastname: </label>
              <input type = "text" required className = "form-control" value = {this.state.lastname} onChange = {this.onChangeLastname}/>
          </div>
          <div className = "form-group">
            <label>Business Name: </label>
              <input type = "text" required className = "form-control" value = {this.state.businessname} onChange = {this.onChangeBusinessname}/>
          </div>
          <div className = "form-group">
            <label>Password: </label>
              <input type = "text" required className = "form-control" value = {this.state.password} onChange = {this.onChangePassword}/>
          </div>
          <div className = "form-group">
            <input type = "submit" value = "Register" className = "btn btn-primary" />
          </div>
        </form>
      </div>

    )
  }
}
