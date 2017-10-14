/*


import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import Component from '../../../src/client/components/login.js';

configure({ adapter: new Adapter() });


const customTheme = {
  palette: {
  }
};

const muiTheme = getMuiTheme(customTheme);

var wrapComponent = function() {
  const props = {
    stay: stay
  };
  //wrapper.setState({status: this.props.stay.status});
  return shallow(
      <Component {...props} />, {
        context: {muiTheme},
        childContextTypes: {muiTheme: propTypes.object}
      }
  );
};


describe('login', () => {
  let sandbox;
  let server;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    server = sandbox.useFakeServer();
  });
  afterEach(() => {
    server.restore();
    sandbox.restore();
  });
  it('should display a blankslate', (done) => {
    getUsers()
    .then(() => {
      expect($('#users').innerHTML)
    .to.equal('The list is empty') })
    .then(done, done);
    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
  '[]']), 0);
  });
});

*/
