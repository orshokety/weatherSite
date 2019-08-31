export class autoCompleteClass {

    AdministrativeArea: AdminAndCountry;
    Country: AdminAndCountry;
    Key: string;
    LocalizedName: string;
    Rank: number;
    Type: string;
    Version: number;
}

export class AdminAndCountry {
    ID: string;
    LocalizedName: string;
}

export class TemperatureAndWeatherClass {
    constructor(Temperature: string, Weather: string) {
        this.Temperature = Temperature;
        this.Weather = Weather;


    }
    Temperature: string;
    Weather: string;

}

export class littleCardData {
    constructor(city: string, country: string, temperature: string, weather: string, locationKey: string) {
        this.city = city;
        this.country = country;
        this.temperature = temperature;
        this.weather = weather;
        this.locationKey = locationKey;
    }
    city: string;
    country: string;
    temperature: string;
    weather: string;
    locationKey: string;
    getalldata() {
        return `${this.city}:${this.country}:${this.temperature}:${this.weather}:${this.locationKey}`
    }
}

export class OneDayFromFive {
    date: Date;
    private minTemp: number;
    private maxTemp: number;
    weatherText: string;

    MinTemp(fahrenheit: number) {
        this.minTemp = (fahrenheit - 32) * 5 / 9
        this.minTemp = parseInt(this.minTemp.toString())
    }
    MaxTemp(fahrenheit: number) {
        this.maxTemp = (fahrenheit - 32) * 5 / 9
        this.maxTemp = parseInt(this.maxTemp.toString())
    }

}