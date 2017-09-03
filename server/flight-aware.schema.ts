import {buildSchema} from 'graphql';

export const schema = buildSchema(`
type AircraftTypeRequest {
    type:String!
}

type AircraftTypeResults {
    AircraftTypeResult:AircraftTypeStruct!
}

type AircraftTypeStruct {
    description:String!
    engine_count:Int
    engine_type:String
    manufacturer:String!
    type:String!
}

type AirlineFlightScheduleStruct {
    actual_ident:String!
    aircrafttype:String!
    arrivaltime:Int!
    departuretime:Int!
    destination:String!
    fa_ident:String
    ident:String!
    meal_service:String
    origin:String!
    seats_cabin_business:Int
    seats_cabin_coach:Int
    seats_cabin_first:Int
}

type AirlineFlightSchedulesRequest {
    airline:String
    destination:String
    end_date:Int!
    exclude_codeshare:Boolean
    flightno:String
    howMany:Int
    offset:Int
    origin:String
    start_date:Int!
}

type AirlineFlightSchedulesResults {
    AirlineFlightSchedulesResult:ArrayOfAirlineFlightScheduleStruct!
}

type AirlineInfoRequest {
    airline_code:String!
}

type AirlineInfoResults {
    AirlineInfoResult:AirlineInfoStruct!
}

type AirlineInfoStruct {
    airbourne:Int
    callsign:String!
    country:String!
    flights_last_24_hours:Int
    location:String!
    name:String!
    phone:String!
    shortname:String!
    url:String!
    wiki_url:String
}

type AirportBoardsRequest {
    airport_code:String!
    filter:String
    howMany:Int
    include_ex_data:Boolean
    offset:Int
    type:String
}

type AirportBoardsResults {
    AirportBoardsResult:AirportBoardsStruct!
}

type AirportBoardsStruct {
    airport:String!
    airport_info:AirportStruct
    arrivals:TrackAirportStruct
    departures:TrackAirportStruct
    enroute:TrackAirportStruct
    scheduled:TrackAirportStruct
}

type AirportDelayEntry {
    airport:String!
    category:String!
    color:String!
    delay_secs:Int!
    reasons_all:[AirportDelayReason]!
}

type AirportDelayReason {
    category:String!
    color:String!
    delay_secs:Int!
    reason:String!
}

type AirportDelayStruct {
    delays:[AirportDelayEntry]!
    next_offset:Int!
}

type AirportDelaysRequest {
    airport_code:String
    howMany:Int
    offset:Int
}

type AirportDelaysResults {
    AirportDelaysResult:AirportDelayStruct!
}

type AirportDisplayStruct {
    airport_name:String!
    alternate_ident:String!
    city:String!
    code:String!
}

type AirportInfoRequest {
    airport_code:String!
}

type AirportInfoResults {
    AirportInfoResult:AirportStruct!
}

type AirportStruct {
    airport_code:String!
    city:String!
    country_code:String
    direction:String
    distance:Int
    elevation:Float
    heading:Int
    latitude:Float!
    longitude:Float!
    name:String!
    state:String
    timezone:String!
    wiki_url:String
}

type ArrayOfAirlineFlightScheduleStruct {
    flights:[AirlineFlightScheduleStruct]!
    next_offset:Int!
}

type ArrayOfCountAirlineOperationsStruct {
    data:[CountAirlineOperationsStruct]!
}

type ArrayOfFlightInfoStatusStruct {
    flights:[FlightInfoStatusStruct]!
    next_offset:Int!
}

type ArrayOfFlightRouteStruct {
    data:[FlightRouteStruct]!
    route_distance:String!
}

type ArrayOfRoutesBetweenAirportsStruct {
    data:[RoutesBetweenAirportsStruct]!
    next_offset:Int!
}

type ArrayOfTrackStruct {
    tracks:[TrackStruct]!
}

type BlockIdentCheckRequest {
    ident:String!
}

type BlockIdentCheckResults {
    BlockIdentCheckResult:Int!
}

type CancellationRowStruct {
    cancellations:Int!
    delays:Int!
    description:String!
    ident:String!
    total:Int!
}

type CancellationSummaryStruct {
    matching:[CancellationRowStruct]!
    next_offset:Int!
    total_cancellations_national:Int!
    total_cancellations_worldwide:Int!
    total_delays_worldwide:Int!
    type_matching:String!
}

type CountAirlineOperationsStruct {
    enroute:Int!
    icao:String!
    name:String!
}

type CountAirportOperationsRequest {
    airport_code:String!
}

type CountAirportOperationsResults {
    CountAirportOperationsResult:CountAirportOperationsStruct!
}

type CountAirportOperationsStruct {
    departed:Int!
    enroute:Int!
    scheduled_arrivals:Int!
    scheduled_departures:Int!
}

type CountAllEnrouteAirlineOperationsResults {
    CountAllEnrouteAirlineOperationsResult:ArrayOfCountAirlineOperationsStruct!
}

type DecodeFlightRouteRequest {
    faFlightID:String!
}

type DecodeFlightRouteResults {
    DecodeFlightRouteResult:ArrayOfFlightRouteStruct!
}

type DecodeRouteRequest {
    destination:String!
    origin:String!
    route:String!
}

type DecodeRouteResults {
    DecodeRouteResult:ArrayOfFlightRouteStruct!
}

type DecodedForecastStruct {
    forecast_end:Int!
    forecast_lines:[ForecastLineStruct]!
    forecast_start:Int!
}

type FindFlightMatch {
    num_segments:Int!
    segments:[FlightInfoStatusStruct]!
}

type FindFlightRequest {
    destination:String!
    filter:String
    howMany:Int
    include_ex_data:Boolean
    offset:Int
    origin:String!
    type:String
}

type FindFlightResults {
    FindFlightResult:FindFlightStruct!
}

type FindFlightStruct {
    flights:[FindFlightMatch]!
    next_offset:Int!
    num_flights:Int!
}

type FlightCancellationStatisticsRequest {
    howMany:Int
    ident_filter:String
    offset:Int
    time_period:String!
    type_matching:String!
}

type FlightCancellationStatisticsResults {
    FlightCancellationStatisticsResult:CancellationSummaryStruct!
}

type FlightInfoStatusRequest {
    filter:String
    howMany:Int
    ident:String!
    include_ex_data:Boolean
    offset:Int
}

type FlightInfoStatusResults {
    FlightInfoStatusResult:ArrayOfFlightInfoStatusStruct!
}

type FlightInfoStatusStruct {
    actual_arrival_time:Timestamp
    actual_blockin_time:Timestamp
    actual_blockout_time:Timestamp
    actual_departure_time:Timestamp
    adhoc:Boolean!
    aircrafttype:String
    airline:String
    arrival_delay:Int
    bag_claim:String
    blocked:Boolean!
    cancelled:Boolean!
    codeshares:String
    datalink:Boolean
    departure_delay:Int
    destination:AirportDisplayStruct
    display_aircrafttype:String
    display_filed_altitude:String
    distance_filed:Int
    diverted:Boolean!
    estimated_arrival_time:Timestamp
    estimated_blockin_time:Timestamp
    estimated_blockout_time:Timestamp
    estimated_departure_time:Timestamp
    faFlightID:String!
    filed_airspeed_kts:Int
    filed_airspeed_mach:Int
    filed_altitude:Int
    filed_arrival_time:Timestamp
    filed_blockin_time:Timestamp
    filed_blockout_time:Timestamp
    filed_departure_time:Timestamp
    filed_ete:Int
    flightnumber:String
    full_aircrafttype:String
    gate_dest:String
    gate_orig:String
    ident:String!
    inbound_faFlightID:String
    origin:AirportDisplayStruct
    progress_percent:Int
    route:String
    seats_cabin_business:Int
    seats_cabin_coach:Int
    seats_cabin_first:Int
    status:String
    tailnumber:String
    terminal_dest:String
    terminal_orig:String
    type:String!
}

type FlightRouteStruct {
    distance_from_origin:Float
    distance_this_leg:Float
    distance_to_destination:Float
    latitude:Float
    longitude:Float
    name:String!
    outbound_course:Float
    type:String!
}

type ForecastCloudsStruct {
    altitude:String
    coverage:String
    special:String
    symbol:String!
}

type ForecastLineStruct {
    barometric:String
    clouds:[ForecastCloudsStruct]
    forecast_line_end:Int!
    forecast_line_start:Int!
    forecast_line_type:String!
    icing_layers:String
    significant_weather:String
    turbulence_layers:String
    visibility:ForecastVisibilityStruct
    winds:ForecastWindStruct
    windshear:ForecastWindshear
}

type ForecastVisibilityStruct {
    symbol:String!
    units:String
    visibility:String!
}

type ForecastWindStruct {
    direction:String!
    peak_gusts:Int
    speed:Int!
    symbol:String!
    units:String
}

type ForecastWindshear {
    direction:String!
    height:String!
    speed:String
    symbol:String!
    units:String
}

type GetFlightTrackRequest {
    ident:String!
    include_position_estimates:Boolean
}

type GetFlightTrackResults {
    GetFlightTrackResult:ArrayOfTrackStruct!
}

type LatLongsToDistanceRequest {
    lat1:Float!
    lat2:Float!
    lon1:Float!
    lon2:Float!
}

type LatLongsToDistanceResults {
    LatLongsToDistanceResult:Int!
}

type LatLongsToHeadingRequest {
    lat1:Float!
    lat2:Float!
    lon1:Float!
    lon2:Float!
}

type LatLongsToHeadingResults {
    LatLongsToHeadingResult:Int!
}

type NearbyAirportsRequest {
    airport_code:String
    howMany:Int
    latitude:Float
    longitude:Float
    offset:Int
    only_iap:Boolean
    radius:Int!
}

type NearbyAirportsResults {
    NearbyAirportsResult:NearbyAirportsStruct!
}

type NearbyAirportsStruct {
    airports:[AirportStruct]!
    next_offset:Int!
}

type RoutesBetweenAirportsRequest {
    destination:String!
    howMany:Int
    max_file_age:String!
    offset:Int
    origin:String!
    sort_by:String!
}

type RoutesBetweenAirportsResults {
    RoutesBetweenAirportsResult:ArrayOfRoutesBetweenAirportsStruct!
}

type RoutesBetweenAirportsStruct {
    aircrafttypes:String!
    count:Int!
    filed_altitude_max:Int!
    filed_altitude_min:Int!
    last_departuretime:Int!
    route:String!
    route_distance:String
}

type TailOwnerRequest {
    ident:String!
}

type TailOwnerResults {
    TailOwnerResult:TailOwnerStruct!
}

type TailOwnerStruct {
    location:String!
    location2:String!
    owner:String!
    website:String!
}

type Timestamp {
    date:String
    dow:String
    epoch:Int!
    localtime:Int
    time:String
    tz:String
}

type TrackAirportStruct {
    flights:[FlightInfoStatusStruct]
    next_offset:Int!
    num_flights:Int!
}

type TrackStruct {
    altitude:Int!
    altitude_change:String!
    altitude_status:String!
    groundspeed:Int!
    latitude:Float!
    longitude:Float!
    timestamp:Int!
    update_type:String!
}

type WeatherConditionsArrayStruct {
    conditions:[WeatherConditionsStruct]!
    next_offset:Int!
}

type WeatherConditionsCloudStruct {
    altitude:Int
    symbol:String!
    type:String!
}

type WeatherConditionsRequest {
    airport_code:String!
    howMany:Int
    offset:Int
    return_nearby_weather:Boolean
    temperature_units:String
    weather_date:Int
}

type WeatherConditionsResults {
    WeatherConditionsResult:WeatherConditionsArrayStruct!
}

type WeatherConditionsStruct {
    airport_code:String!
    cloud_friendly:String!
    clouds:[WeatherConditionsCloudStruct]
    conditions:String!
    pressure:Float!
    pressure_units:String!
    raw_data:String!
    temp_air:Int!
    temp_dewpoint:Int!
    temp_perceived:String!
    temp_relhum:Int!
    time:Int!
    visibility:Float!
    visibility_units:String!
    wind_direction:Int!
    wind_friendly:String!
    wind_speed:Int!
    wind_speed_gust:Int!
    wind_units:String!
}

type WeatherForecastRequest {
    airport_code:String!
    return_nearby_weather:Boolean
    weather_date:Int
}

type WeatherForecastResults {
    WeatherForecastResult:WeatherForecastStruct!
}

type WeatherForecastStruct {
    airport_code:String!
    decoded_forecast:DecodedForecastStruct
    raw_forecast:[String]!
    timestring:String!
}

type ZipcodeInfoRequest {
    zipcode:String!
}

type ZipcodeInfoResults {
    ZipcodeInfoResult:ZipcodeInfoStruct!
}

type ZipcodeInfoStruct {
    city:String!
    county:String!
    latitude:Float!
    longitude:Float!
    state:String!
}

type FlightAware {
    AircraftType(type:String!):AircraftTypeStruct
    AirlineFlightSchedules(start_date:Int!, end_date:Int!, origin:String, destination:String, airline:String, flightno:String, exclude_codeshare:Boolean, howMany:Int, offset:Int):ArrayOfAirlineFlightScheduleStruct
    AirlineInfo(airline_code:String!):AirlineInfoStruct
    AirportBoards(airport_code:String!, include_ex_data:Boolean, filter:String, type:String, howMany:Int, offset:Int):AirportBoardsStruct
    AirportDelays(airport_code:String, howMany:Int, offset:Int):AirportDelayStruct
    AirportInfo(airport_code:String!):AirportStruct
    BlockIdentCheck(ident:String!):Int
    CountAirportOperations(airport_code:String!):CountAirportOperationsStruct
    CountAllEnrouteAirlineOperations:ArrayOfCountAirlineOperationsStruct
    DecodeFlightRoute(faFlightID:String!):ArrayOfFlightRouteStruct
    DecodeRoute(origin:String!, route:String!, destination:String!):ArrayOfFlightRouteStruct
    FindFlight(origin:String!, destination:String!, include_ex_data:Boolean, type:String, filter:String, howMany:Int, offset:Int):FindFlightStruct
    FlightCancellationStatistics(time_period:String!, type_matching:String!, ident_filter:String, howMany:Int, offset:Int):CancellationSummaryStruct
    FlightInfoStatus(ident:String!, include_ex_data:Boolean, filter:String, howMany:Int, offset:Int):ArrayOfFlightInfoStatusStruct
    GetFlightTrack(ident:String!, include_position_estimates:Boolean):ArrayOfTrackStruct
    LatLongsToDistance(lat1:Float!, lon1:Float!, lat2:Float!, lon2:Float!):Int
    LatLongsToHeading(lat1:Float!, lon1:Float!, lat2:Float!, lon2:Float!):Int
    NearbyAirports(latitude:Float, longitude:Float, airport_code:String, radius:Int!, only_iap:Boolean, howMany:Int, offset:Int):NearbyAirportsStruct
    RoutesBetweenAirports(origin:String!, destination:String!, max_file_age:String!, sort_by:String!, howMany:Int, offset:Int):ArrayOfRoutesBetweenAirportsStruct
    TailOwner(ident:String!):TailOwnerStruct
    WeatherConditions(airport_code:String!, weather_date:Int, temperature_units:String, return_nearby_weather:Boolean, howMany:Int, offset:Int):WeatherConditionsArrayStruct
    WeatherForecast(airport_code:String!, weather_date:Int, return_nearby_weather:Boolean):WeatherForecastStruct
    ZipcodeInfo(zipcode:String!):ZipcodeInfoStruct
}

type Query {
    flightAware:FlightAware
}`);
