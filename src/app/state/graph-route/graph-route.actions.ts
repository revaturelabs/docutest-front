import { Injectable } from '@angular/core';
import { createAction, props } from '@ngrx/store';
import { GraphRoute } from './graph-route.model';

export const UPDATE_ROUTE = createAction('[GraphRoute] Update', props<{graphRoute: GraphRoute}>());
