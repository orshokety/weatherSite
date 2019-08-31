import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogForMoreDitailsComponent } from '../dialog-for-more-ditails/dialog-for-more-ditails.component';
import { littleCardData } from 'src/app/HelpClasses';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  littleCardArray: Array<littleCardData>;

  openFiveDays(city: string, country: string, locationKey: string) {
    this.dialog.open(DialogForMoreDitailsComponent, { data: { city: city, country: country, locationKey: locationKey } });
  }


  ngOnInit() {
    this.littleCardArray = new Array<littleCardData>();
    var i: number = 0
    while (i < localStorage.length) {
      debugger
      var data: string = localStorage.getItem(localStorage.key(i))
      var dataArray: Array<string> = new Array<string>();
      dataArray = data.split(":")
      this.littleCardArray[i] = new littleCardData(dataArray[0], dataArray[1],
        dataArray[2], dataArray[3], dataArray[4])
      i++
    }
    localStorage
  }

  removeFromFavorite(item: littleCardData) {
    var i: number = 0;
    debugger;
    while (i < localStorage.length) {
      var localKey: string = localStorage.key(i);
      var data: string = localStorage.getItem(localKey).split(":")[0];
      if (data == item.city) {
        localStorage.removeItem(localKey)
        this.littleCardArray.splice(i, 1)
      }
      else {
        i++
      }
    }

  }

  //check it all ready is favorite
  isFavorite(item: littleCardData): boolean {
    var i: number = 0
    while (i < localStorage.length) {
      var localKey: string = localStorage.key(i);
      var data: string = localStorage.getItem(localKey).split(":")[0];
      if (data == item.city) {
        return true

      }
      else {
        i++
      }

    }
    return false
  }

}
