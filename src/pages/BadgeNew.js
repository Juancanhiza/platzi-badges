import React from 'react';
import Navbar from '../components/Navbar';
import badge from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    state = {form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: ""
    } };

    handleChange= e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };
    render(){
        return( 
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img_fluid" src={badge} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName} 
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                                avatarUrl="https://s.gravatar.com/avatar/8ce41fa87eb92f3b8681791e1e2a72f8?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;