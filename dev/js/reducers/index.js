import {combineReducers} from 'redux';
import LandingPageReducer from './reducer-landingpage'

const allReducers = combineReducers({
	landingPageData : LandingPageReducer
});

export default allReducers;