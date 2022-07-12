export class DriverController {
  router: any;
  driverService: any;
  constructor(router: any, driverService: any) {
    this.router = router;
    this.driverService = driverService;
  }
  getRouterConf() {
    this.router.get("/", async (req: any, res: any) => {
      const drivers = this.driverService.getDrivers();
      res.send(drivers);
    });
    this.router.post("/:driverId/overtake", async (req: any, res: any) => {
      const drivers = this.driverService.overTakePlace(req.params.driverId);
      res.send(drivers);
    });
    return this.router;
  }
}
