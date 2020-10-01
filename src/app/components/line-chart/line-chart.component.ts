import { Component, OnInit } from '@angular/core';
import {multi} from '../../data';
import { from, Observable } from 'rxjs';

//NgRX
import {GraphRoute} from '../../state/graph-route/graph-route.model';
import { UPDATE_ROUTE } from '../../state/graph-route/graph-route.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  
  //NgRX
  graphRoute$: Observable<GraphRoute>;
  multi;
  routeNames: any[];
  view: any[] = [1000, 500];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Request';
  yAxisLabel: string = 'Time (Miliseconds)';
  timeline: boolean = true;
  selectedRoute;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  //NgRx
  constructor(private store: Store<{graphRoute}>) {
    this.routeNames = new Array();
    this.graphRoute$ = store.select('graphRoute');

    
    Object.assign(this, {multi});

    for(const [key, value] of Object.entries(this.multi)){
      this.routeNames.push(key);
    }
  
  }


  // constructor() {
  //   this.routeNames = new Array();

    
  //   Object.assign(this, {multi});

  //   for(const [key, value] of Object.entries(this.multi)){
  //     this.routeNames.push(key);
  //   }

  //   this.selectedRoute = this.multi[0]
  
  // }

  ngOnInit(): void {

  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  showRoute(routeName) {
    this.selectedRoute = this.multi[routeName];
  }

  update_route(route_name: string) {
    
    this.store.dispatch(UPDATE_ROUTE({graphRoute: {route: route_name}}));
    this.selectedRoute = this.multi[route_name];
    console.log(this.graphRoute$);
  }


}
