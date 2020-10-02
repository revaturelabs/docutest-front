import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GraphRoute } from '../../state/graph-route/graph-route.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export default class DropdownComponent {
  graphRoute$: Observable<GraphRoute>;

  constructor(private store: Store<{graphRoute: GraphRoute}>) {
    this.graphRoute$ = store.select('graphRoute');
  }
}
