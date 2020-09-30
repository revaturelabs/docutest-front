import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  multiOne;
  routeNames: any[];
  view: any[] = [700, 300];

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

  constructor() {
    this.routeNames = new Array();
    this.multiOne =
    {
      '/route1':
        [
          {
          "name": "POST",
          "series": [
            {
              "name": "1",
              "value": 620,
              "HttpStatus": 200
            },
            {
              "name": "2",
              "value": 730
            },
            {
              "name": "3",
              "value": 890
            }
          ]
        },
        {
          "name": "GET",
          "series": [
            {
              "name": "1",
              "value": 400
            },
            {
              "name": "2",
              "value": 780
            },
            {
              "name": "3",
              "value": 300
            },
          ]
        },
      
        {
          "name": "PUT",
            "series": [
              {
                "name": "1",
                "value": 570
              },
              {
                "name": "2",
                "value": 900
              },
              {
                "name": "3",
                "value": 500
              },
          ]
        },
        {
          "name": "DELETE",
          "series": [
            {
              "name": "1",
              "value": 570
            },
            {
              "name": "2",
              "value": 0
            },
            {
              "name": "3",
              "value": 500
            },

          ]
        }
      ],
      '/route2': 
        [
          {
            "name": "POST",
            "series": [
              {
                "name": "1",
                "value": 500
              },
              {
                "name": "2",
                "value": 730
              },
              {
                "name": "3",
                "value": 300
              }
            ]
          },
          {
            "name": "GET",
            "series": [
              {
                "name": "1",
                "value": 410
              },
              {
                "name": "2",
                "value": 800
              },
              {
                "name": "3",
                "value":450
              },
            ]
          },
          {
            "name": "DELETE",
            "series": [
              {
                "name": "1",
                "value": 560
              },
              {
                "name": "2",
                "value": 700
              },
              {
                "name": "3",
                "value": 630
              },
    
          ]
        }
      ],
      '/route3': 
      [
        {
          "name": "POST",
          "series": [
            {
              "name": "1",
              "value": 560
            },
            {
              "name": "2",
              "value": 300
            },
            {
              "name": "3",
              "value": 900
            }
          ]
        },
        {
          "name": "GET",
          "series": [
            {
              "name": "1",
              "value": 600
            },
            {
              "name": "2",
              "value": 200
            },
            {
              "name": "3",
              "value":450
            },
          ]
        }
      ]
    };

    for(const [key, value] of Object.entries(this.multiOne)){
      this.routeNames.push(key);
    }

    this.selectedRoute = this.multiOne[0];
  }

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
    this.selectedRoute = this.multiOne[routeName];
  }

  // showRoute2() {
  //   this.selectedRoute = this.multiTwo;
  // }

}
