export class DriverController {
  router: any;
  morgan: any;
  driverService: any;
  constructor(router: any, morgan: any, driverService: any) {
    this.router = router;
    this.morgan = morgan;
    this.driverService = driverService;
  }
  getRouterConf() {
    this.router.get("/", this.morgan("tiny"), async (req: any, res: any) => {
      const drivers = this.driverService.getDrivers();
      res.send(drivers);
    });
    this.router.post(
      "/:driverId/overtake",
      this.morgan("tiny"),
      async (req: any, res: any) => {
        const drivers = this.driverService.overTakePlace(req.params.driverId);
        res.send(drivers);
      }
    );
    return this.router;
  }
}
