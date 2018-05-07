import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ClientDetailsPage = function(props) {
  if (!props.profile || !props.profile.isAdmin || !props.profile.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="client-details-page">
      <h3>Name: {props.match.params.name}</h3>
    </div>
  );
};

ClientDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  profile: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(ClientDetailsPage);
