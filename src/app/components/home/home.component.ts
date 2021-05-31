import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CatApiService } from 'src/app/services/cat-api.service';
import { ICatData } from 'src/app/model/catdata';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgUrl: string = "";
  catData: ICatData[] = [];
  constructor(private catApiService: CatApiService) { }

  ngOnInit(): void {
    this.refreshImage();    
  }

  onClickNext(): void {
    this.refreshImage();
  }

  refreshImage(): void {
    this.catApiService.getNewCatData().subscribe(result => {
      result.map(x => this.imgUrl = x.url);
    });
    console.log(this.imgUrl);
  }

}
