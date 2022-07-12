export class DriverService {
  axios: any;
  drivers: any;
  utils: any;
  constructor(axios: any, drivers: any, utils: any) {
    this.axios = axios;
    this.drivers = drivers;
    this.utils = utils;
  }

  getDrivers() {
    try {
      const places = this.utils.getPlaces();
      for (let i = 0; i < places.length; i++) {
        this.drivers[i]["place"] = places[i];
      }
      return this.drivers.sort((a, b) => a.place - b.place);
    } catch (error) {
      console.log(error.message);
    }
  }
  overTakePlace(driverId: any) {
    try {
      for (let i = 0; i < this.drivers.length; i++) {
        console.log(this.drivers[i].id == driverId);
        if (this.drivers[i].id == driverId && this.drivers[i].place !== 1) {
          this.drivers[i].place = this.drivers[i].place - 1;
          this.drivers[i - 1].place = this.drivers[i - 1].place + 1;
        }
      }
      return this.drivers.sort((a, b) => a.place - b.place);
    } catch (error) {
      console.log(error.message);
    }
  }
}
