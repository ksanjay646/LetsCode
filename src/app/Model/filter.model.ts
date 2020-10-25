export class FilterModel {
    launchYear?: string;
    successfulLaunch?: string;
    successfulLanding?: string;
    constructor(
        launchYear: string = null,
        successfulLaunch: string = null,
        successfulLanding: string = null
    ) {
        this.launchYear = launchYear;
        this.successfulLaunch = successfulLaunch;
        this.successfulLanding = successfulLanding;
    }
}