import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';

import EnvoyList from './EnvoyList';
import AddCriterionComponent from './AddCriterionComponent';
import AddEnvoyComponent from './AddEnvoyComponent';
import RemoveCriterionComponent from './RemoveCriterionComponent';
import UpdateEnvoyComponent from './UpdateEnvoyComponent';
import UpdateCriterion from './UpdateCriterion';
import Notify from './Notify';
import LinkGenerator from './LinkGenerator';
import { getParty, getCountries } from '../actions/actions';

class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getParty();
        this.props.getCountries();
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={EnvoyList} />
                    <Route exact path="/dodaj" component={AddEnvoyComponent} />
                    <Route path="/edycja/:id" component={UpdateEnvoyComponent} /> 
                    <Route exact path="/dodajKryterium" component={AddCriterionComponent} />
                    <Route exact path="/usunKryterium" component={RemoveCriterionComponent} />
                    <Route exact path="/edytujKryterium" component={UpdateCriterion} />
                    <Route exact path="/generator" component={LinkGenerator} />
                </Switch>
                <Notify />
            </React.Fragment>
        )
    }
}

export default connect(null, {getParty, getCountries})(ContentComponent);