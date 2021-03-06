import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Logo from '../components/Logo';
import { Header, Icon } from 'semantic-ui-react';


const HeadBar = ({ name, isModalOpen }) => {
  //not passing right value in reducer or not viewing value correctly here
  if(!isModalOpen) {
    return (
      <div className="titleBar2">
        <div className="titleString2">
          <Title name='DA MODAL!'/>
          {/* <Logo /> */}
        </div>
      </div>
    );
  }
      else {
        return (

          <div className="titleBar">
            <div className="titleString">
              <Title name={name}/>
              <Logo />
            </div>
          </div>
        );
      }
};


HeadBar.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};


export default connect(
    mapStateToProps,
)(HeadBar);
