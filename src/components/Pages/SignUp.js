import React ,{Component} from 'react'
import '../../App.css'
import './SignUp.css'
import './Pages.css'
import Footer from "../Footer";
class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {name:"",
                      email:"",
                      phonenumber:"",
                      passsword:"",
                      confirmpassword:""
        }
    }
    handlechangeall = (event) =>{
        this.setState({ [event.target.name] : event.target.value})
    }
    handleSubmit = (event) =>{
        alert(JSON.stringify(this.state)); 
        event.preventDefault();   
    }
    render(){
        return(
            <>
                <div className="window">
                    <h1 className="su">Sign Up</h1>
                    <div className="ln" >
                        <hr className="hr" />
                    </div>
                    <form onSubmit = {this.handlesubmit}>
                        <label>Name</label><br/>
                        <input className="inf" type="text" name="name" value={this.state.name}
                        onChange={this.handlechangeall} /><br/>

                        <label>E-mail</label><br/>
                        <input className="inf" type="email" name="email" value={this.state.email}
                        onChange={this.handlechangeall} /><br/>

                        <label>Phone Number</label><br/>
                        <input className="inf" type="number" name="number" value={this.state.number}
                        onChange={this.handlechangeall} /><br/>
                        
                        <label>Password</label><br/>
                        <input className="inf" type="password" name="password" value={this.state.password}
                        onChange={this.handlechangeall} />

                        <input type="submit" className="bt" value="Sign Up"/>
                    </form>
                </div>
                <Footer />
            </>    
        )
        }
}
export default SignUp;
