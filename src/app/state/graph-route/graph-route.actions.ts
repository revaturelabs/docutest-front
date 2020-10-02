import { createAction, props } from '@ngrx/store';
import { GraphRoute } from './graph-route.model';

// eslint-disable-next-line import/prefer-default-export
export const UPDATE_ROUTE = createAction('[GraphRoute] Update', props<{graphRoute: GraphRoute}>());
