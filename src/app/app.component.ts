import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'DistancePresenter';

  locations:any=[];

  constructor(private locationService:LocationService)
  {}

  ngOnInit(): void {

    this.locationService.getLocation().subscribe({
      next:(response)=>{
        this.locations=response;
      },
      error:(error)=>{
        console.log(error);
      }
    });
    
  }

}
