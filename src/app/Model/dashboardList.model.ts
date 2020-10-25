
export class DashboardList {
    flight_number?: number;
    mission_name?: string;
    mission_id?: Array<any>;
    upcoming?: boolean;
    launch_year?: string;
    launch_date_unix?: number;
    launch_date_utc?: string;
    launch_date_local?: string;
    is_tentative?: boolean;
    tentative_max_precision?: string;
    tbd?: boolean;
    launch_window?: number;
    rocket?: object;
    ships?: Array<any>;
    telemetry?: object;
    launch_site?: object;
    launch_success?: boolean;
    launch_failure_details?: object;
    links?: object;
    details?: string;
    static_fire_date_utc?: string;
    static_fire_date_unix?: number;
    timeline?: object;
    crew?: string;

    constructor(
        flight_number: number = null,
        mission_name: string = null,
        mission_id: Array<any> = [],
        upcoming: boolean = false,
        launch_year: string = null,
        launch_date_unix: number = null,
        launch_date_utc: string = null,
        launch_date_local: string = null,
        is_tentative: boolean = false,
        tentative_max_precision: string = null,
        tbd: boolean = false,
        launch_window: number = null,
        rocket: object = [],
        ships: Array<any> = [],
        telemetry: object = {},
        launch_site: object = {},
        launch_success: boolean = false,
        launch_failure_details: object = {},
        links: object = {},
        details: string = null,
        static_fire_date_utc: string = null,
        static_fire_date_unix: number = null,
        timeline: object = {},
        crew: string = null
    ) {
        this.flight_number = flight_number;
        this.mission_name = mission_name;
        this.mission_id = mission_id;
        this.upcoming = upcoming;
        this.launch_year = launch_year;
        this.launch_date_unix = launch_date_unix;
        this.launch_date_utc = launch_date_utc;
        this.launch_date_local = launch_date_local;
        this.is_tentative = is_tentative;
        this.tentative_max_precision = tentative_max_precision;
        this.tbd = tbd;
        this.launch_window = launch_window;
        this.rocket = rocket;
        this.ships = ships;
        this.telemetry = telemetry;
        this.launch_site = launch_site;
        this.launch_success = launch_success;
        this.launch_failure_details = launch_failure_details;
        this.links = links;
        this.details = details;
        this.static_fire_date_utc = static_fire_date_utc;
        this.static_fire_date_unix = static_fire_date_unix;
        this.timeline = timeline;
        this.crew = crew;
    }
}

