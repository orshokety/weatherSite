import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { WeatherService } from 'src/app/weather.service';
import { OneDayFromFive, littleCardData } from 'src/app/HelpClasses';

@Component({
  selector: 'app-dialog-for-more-ditails',
  templateUrl: './dialog-for-more-ditails.component.html',
  styleUrls: ['./dialog-for-more-ditails.component.css']
})
export class DialogForMoreDitailsComponent implements OnInit {

  fiveDaysArray: Array<OneDayFromFive> = new Array<OneDayFromFive>(5);

  constructor(public dialogRef: MatDialogRef<DialogForMoreDitailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private ser: WeatherService) {

    ser.getFiveDaysWeather(data.locationKey).subscribe(res => {

      for (let i = 0; i < this.fiveDaysArray.length; i++) {
        this.fiveDaysArray[i] = new OneDayFromFive();
        this.fiveDaysArray[i].date = new Date(res.DailyForecasts[i].Date);
        this.fiveDaysArray[i].MinTemp(res.DailyForecasts[i].Temperature.Minimum.Value);
        this.fiveDaysArray[i].MaxTemp(res.DailyForecasts[i].Temperature.Maximum.Value);
        this.fiveDaysArray[i].weatherText = res.DailyForecasts[i].Day.IconPhrase
      }

    });

  }

  close() {
    this.dialogRef.close()
  }

  ngOnInit() {
  }

}
