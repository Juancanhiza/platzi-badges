import React, { Fragment } from 'react';
import badge from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading'
import api from '../api'


class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }

    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img_fluid" src={badge} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://s.gravatar.com/avatar/8ce41fa87eb92f3b8681791e1e2a72f8?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BadgeNew;