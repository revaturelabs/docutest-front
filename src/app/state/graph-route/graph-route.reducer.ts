import { Action, createReducer, on } from '@ngrx/store'
import { GraphRoute } from './graph-route.model';
import * as GraphRouteActions from './graph-route.actions';

export interface State {
    route: string;
}


const initialState: State = {
    route: '/route1',
}


const graphRouteReducer = createReducer(
    initialState,
    on(GraphRouteActions.UPDATE_ROUTE, (state, { graphRoute }) => ({route: graphRoute.route}) )
);

export function reducer(state: State | undefined, action: Action) {
    return graphRouteReducer(state, action);
}