import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Album } from './album';

@Component({
  selector: 'app-http-examples',
  templateUrl: './http-examples.component.html',
  styleUrls: ['./http-examples.component.css'],
})
export class HttpExamplesComponent implements OnInit {
  constructor(private getDataService: GetDataService) {}

  users: any;
  usersRewrote: any;

  ngOnInit(): void {
    this.getDataService.getDataMethod().subscribe((res) => {
      console.log(res);
      this.users = res;
    });

    this.getDataService.getDataMethodRxJs().subscribe((res: Album[]) => {
      console.log('Transformed data:', res);
      this.usersRewrote = res;
    });
  }
}
