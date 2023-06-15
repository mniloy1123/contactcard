import React,  {Component} from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div style={{padding:"10px", color:"white", background: `${this.props.name=="John Doe"||this.props.name=="Jared Doe"?"blue":"red"}`}}>
            <h1>Contact Name : {this.props.name}</h1>
            <h2>Mobile Number : {this.props.mobileNumber}</h2>
            <h2>Work Phone : {this.props.workPhone}</h2>
            <h2>Email : {this.props.email}</h2>
          </div>
        )
    }
}

// static propTypes = {
//     name: PropTypes.string.isRequired, 
//     mobileNumber: PropTypes.number.isRequired, 
//     workPhone: PropTypes.number, 
//     email: PropTypes.string.isRequired
// }

export default ContactCard;