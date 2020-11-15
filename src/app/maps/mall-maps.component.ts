import {Component, OnInit} from '@angular/core';
import MapTypeId = google.maps.MapTypeId;

@Component({
  selector: 'app-mall-maps',
  templateUrl: './mall-maps.component.html',
  styleUrls: ['./mall-maps.component.css']
})

export class MallMapsComponent implements OnInit{

  title = 'My first AGM project';
  lat = 36.521606;
  lng = -4.872996;

  ngOnInit(): void {
  }

}
