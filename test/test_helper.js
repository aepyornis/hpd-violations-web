import { expect } from 'chai';
import sinon from 'sinon';
import React from 'react';
import { mount, shallow } from 'enzyme';

global.expect = expect;
global.sinon = sinon;
global.React = React;
global.mount = mount;
global.shallow = shallow;
global.L = console.log;
