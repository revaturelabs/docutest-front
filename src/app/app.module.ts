import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './components/dropdown/dropdown.component';

//NgRX
import { StoreModule } from '@ngrx/store';
import * as fromGraphRoute from './state/graph-route/graph-route.reducer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    LineChartComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    //NgRX
    StoreModule.forRoot({
      graphRoute: fromGraphRoute.reducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
