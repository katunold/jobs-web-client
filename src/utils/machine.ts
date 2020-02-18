import { Machine } from 'xstate';
import actions from './actions';
import services from './services';
import statechart from './statechart';

const machine = Machine(statechart, { actions, services });

export default machine;
