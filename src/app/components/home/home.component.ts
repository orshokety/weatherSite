import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { autoCompleteClass, TemperatureAndWeatherClass, littleCardData } from 'src/app/HelpClasses';
import { MatDialog } from '@angular/material';
import { DialogForMoreDitailsComponent } from '../dialog-for-more-ditails/dialog-for-more-ditails.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchData: Array<autoCompleteClass>;
  TemperatureAndWeathers: Array<TemperatureAndWeatherClass>;
  littleCardArray: Array<littleCardData>;

  constructor(private weatherService: WeatherService, public dialog: MatDialog) {

  }
  //search function
  search(location: string) {
    this.littleCardArray = new Array<littleCardData>();
    this.weatherService.getByName(location).subscribe((d: any) => {
      this.searchData = d
      this.TemperatureAndWeathers = new Array<TemperatureAndWeatherClass>();
      for (let i = 0; i < this.searchData.length; i++) {
        this.TemperatureAndWeather(this.searchData[i].Key);
      }

    }, (error) => { console.log(error) });
  }

  //get TemperatureAndWeather
  TemperatureAndWeather(locationKey: string) {

    this.weatherService.getTemperatureAndWeather(locationKey).subscribe(res => {
      this.TemperatureAndWeathers.push(new TemperatureAndWeatherClass(res[0].Temperature.Metric.Value, res[0].WeatherText));
      if (this.TemperatureAndWeathers.length == this.searchData.length) {
        for (let j = 0; j < this.searchData.length; j++) {
          this.littleCardArray.push(new littleCardData(this.searchData[j].LocalizedName, this.searchData[j].Country.LocalizedName,
            this.TemperatureAndWeathers[j].Temperature, this.TemperatureAndWeathers[j].Weather, this.searchData[j].Key));
        }
      }
    }, (error) => { console.log(error) });
  }

  //open ditails for the next five days
  openFiveDays(city: string, country: string, locationKey: string) {
    this.dialog.open(DialogForMoreDitailsComponent, { data: { city: city, country: country, locationKey: locationKey } });
  }

  //set ctiy as favorite
  favorite(item: littleCardData) {
    debugger
    var i: number = 0
    while (localStorage.getItem(`favorite${i}`)) {
      i++
    }
    localStorage.setItem(`favorite${i}`, item.getalldata());
  }

  removeFromFavorite(item: littleCardData) {
    var i: number = 0;
    debugger;
    while (i < localStorage.length) {
      var localKey: string = localStorage.key(i);
      var data: string = localStorage.getItem(localKey).split(":")[0];
      if (data == item.city) {
        localStorage.removeItem(localKey)

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

  ngOnInit() {
  }

}
