import { Component, OnInit } from '@angular/core';
import {GraphRoute} from '../../state/graph-route/graph-route.model';
import { UPDATE_ROUTE } from '../../state/graph-route/graph-route.actions';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  graphRoute$: Observable<GraphRoute>;
  constructor(private store: Store<{graphRoute: GraphRoute}>) {
    this.graphRoute$ = store.select("graphRoute");
     
   }

  ngOnInit(): void {
  }

}
