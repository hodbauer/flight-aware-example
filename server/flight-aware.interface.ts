export interface AircraftType {
  type:string;
}

export interface AirlineFlightSchedules {
  start_date:number;
  end_date:number;
  origin?:string;
  destination?:string;
  airline?:string;
  flightno?:string;
  exclude_codeshare?:boolean;
  howMany?:number;
  offset?:number;
}

export interface AirlineInfo {
  airline_code:string;
}

export interface AirportBoards {
  airport_code:string;
  include_ex_data?:boolean;
  filter?:string;
  type?:string;
  howMany?:number;
  offset?:number;
}

export interface AirportDelays {
  airport_code?:string;
  howMany?:number;
  offset?:number;
}

export interface AirportInfo {
  airport_code:string;
}

export interface BlockIdentCheck {
  ident:string;
}

export interface CountAirportOperations {
  airport_code:string;
}

export interface CountAllEnrouteAirlineOperations {
}

export interface DecodeFlightRoute {
  faFlightID:string;
}

export interface DecodeRoute {
  origin:string;
  route:string;
  destination:string;
}

export interface FindFlight {
  origin:string;
  destination:string;
  include_ex_data?:boolean;
  type?:string;
  filter?:string;
  howMany?:number;
  offset?:number;
}

export interface FlightCancellationStatistics {
  time_period:string;
  type_matching:string;
  ident_filter?:string;
  howMany?:number;
  offset?:number;
}

export interface FlightInfoStatus {
  ident:string;
  include_ex_data?:boolean;
  filter?:string;
  howMany?:number;
  offset?:number;
}

export interface GetFlightTrack {
  ident:string;
  include_position_estimates?:boolean;
}

export interface LatLongsToDistance {
  lat1:number;
  lon1:number;
  lat2:number;
  lon2:number;
}

export interface LatLongsToHeading {
  lat1:number;
  lon1:number;
  lat2:number;
  lon2:number;
}

export interface NearbyAirports {
  latitude?:number;
  longitude?:number;
  airport_code?:string;
  radius:number;
  only_iap?:boolean;
  howMany?:number;
  offset?:number;
}

export interface RoutesBetweenAirports {
  origin:string;
  destination:string;
  max_file_age:string;
  sort_by:string;
  howMany?:number;
  offset?:number;
}

export interface TailOwner {
  ident:string;
}

export interface WeatherConditions {
  airport_code:string;
  weather_date?:number;
  temperature_units?:string;
  return_nearby_weather?:boolean;
  howMany?:number;
  offset?:number;
}

export interface WeatherForecast {
  airport_code:string;
  weather_date?:number;
  return_nearby_weather?:boolean;
}

export interface ZipcodeInfo {
  zipcode:string;
}

export interface AircraftTypeRequest {
  type:string;
}

export interface AircraftTypeResults {
  AircraftTypeResult:AircraftTypeStruct;
}

export interface AircraftTypeStruct {
  description:string;
  engine_count?:number;
  engine_type?:string;
  manufacturer:string;
  type:string;
}

export interface AirlineFlightSchedulesRequest {
  airline?:string;
  destination?:string;
  end_date:number;
  exclude_codeshare?:boolean;
  flightno?:string;
  howMany?:number;
  offset?:number;
  origin?:string;
  start_date:number;
}

export interface AirlineFlightSchedulesResults {
  AirlineFlightSchedulesResult:ArrayOfAirlineFlightScheduleStruct;
}

export interface AirlineFlightScheduleStruct {
  actual_ident:string;
  aircrafttype:string;
  arrivaltime:number;
  departuretime:number;
  destination:string;
  fa_ident?:string;
  ident:string;
  meal_service?:string;
  origin:string;
  seats_cabin_business?:number;
  seats_cabin_coach?:number;
  seats_cabin_first?:number;
}

export interface AirlineInfoRequest {
  airline_code:string;
}

export interface AirlineInfoResults {
  AirlineInfoResult:AirlineInfoStruct;
}

export interface AirlineInfoStruct {
  airbourne?:number;
  callsign:string;
  country:string;
  flights_last_24_hours?:number;
  location:string;
  name:string;
  phone:string;
  shortname:string;
  url:string;
  wiki_url?:string;
}

export interface AirportBoardsRequest {
  airport_code:string;
  filter?:string;
  howMany?:number;
  include_ex_data?:boolean;
  offset?:number;
  type?:string;
}

export interface AirportBoardsResults {
  AirportBoardsResult:AirportBoardsStruct;
}

export interface AirportBoardsStruct {
  airport:string;
  airport_info?:AirportStruct;
  arrivals?:TrackAirportStruct;
  departures?:TrackAirportStruct;
  enroute?:TrackAirportStruct;
  scheduled?:TrackAirportStruct;
}

export interface AirportDelayEntry {
  airport:string;
  category:string;
  color:string;
  delay_secs:number;
  reasons_all:AirportDelayReason[];
}

export interface AirportDelayReason {
  category:string;
  color:string;
  delay_secs:number;
  reason:string;
}

export interface AirportDelaysRequest {
  airport_code?:string;
  howMany?:number;
  offset?:number;
}

export interface AirportDelaysResults {
  AirportDelaysResult:AirportDelayStruct;
}

export interface AirportDelayStruct {
  delays:AirportDelayEntry[];
  next_offset:number;
}

export interface AirportDisplayStruct {
  airport_name:string;
  alternate_ident:string;
  city:string;
  code:string;
}

export interface AirportInfoRequest {
  airport_code:string;
}

export interface AirportInfoResults {
  AirportInfoResult:AirportStruct;
}

export interface AirportStruct {
  airport_code:string;
  city:string;
  country_code?:string;
  direction?:string;
  distance?:number;
  elevation?:number;
  heading?:number;
  latitude:number;
  longitude:number;
  name:string;
  state?:string;
  timezone:string;
  wiki_url?:string;
}

export interface ArrayOfAirlineFlightScheduleStruct {
  flights:AirlineFlightScheduleStruct[];
  next_offset:number;
}

export interface ArrayOfCountAirlineOperationsStruct {
  data:CountAirlineOperationsStruct[];
}

export interface ArrayOfFlightInfoStatusStruct {
  flights:FlightInfoStatusStruct[];
  next_offset:number;
}

export interface ArrayOfFlightRouteStruct {
  data:FlightRouteStruct[];
  route_distance:string;
}

export interface ArrayOfRoutesBetweenAirportsStruct {
  data:RoutesBetweenAirportsStruct[];
  next_offset:number;
}

export interface ArrayOfTrackStruct {
  tracks:TrackStruct[];
}

export interface BlockIdentCheckRequest {
  ident:string;
}

export interface BlockIdentCheckResults {
  BlockIdentCheckResult:number;
}

export interface CancellationRowStruct {
  cancellations:number;
  delays:number;
  description:string;
  ident:string;
  total:number;
}

export interface CancellationSummaryStruct {
  matching:CancellationRowStruct[];
  next_offset:number;
  total_cancellations_national:number;
  total_cancellations_worldwide:number;
  total_delays_worldwide:number;
  type_matching:string;
}

export interface CountAirlineOperationsStruct {
  enroute:number;
  icao:string;
  name:string;
}

export interface CountAirportOperationsRequest {
  airport_code:string;
}

export interface CountAirportOperationsResults {
  CountAirportOperationsResult:CountAirportOperationsStruct;
}

export interface CountAirportOperationsStruct {
  departed:number;
  enroute:number;
  scheduled_arrivals:number;
  scheduled_departures:number;
}

export interface CountAllEnrouteAirlineOperationsRequest {
}

export interface CountAllEnrouteAirlineOperationsResults {
  CountAllEnrouteAirlineOperationsResult:ArrayOfCountAirlineOperationsStruct;
}

export interface DecodedForecastStruct {
  forecast_end:number;
  forecast_lines:ForecastLineStruct[];
  forecast_start:number;
}

export interface DecodeFlightRouteRequest {
  faFlightID:string;
}

export interface DecodeFlightRouteResults {
  DecodeFlightRouteResult:ArrayOfFlightRouteStruct;
}

export interface DecodeRouteRequest {
  destination:string;
  origin:string;
  route:string;
}

export interface DecodeRouteResults {
  DecodeRouteResult:ArrayOfFlightRouteStruct;
}

export interface FindFlightMatch {
  num_segments:number;
  segments:FlightInfoStatusStruct[];
}

export interface FindFlightRequest {
  destination:string;
  filter?:string;
  howMany?:number;
  include_ex_data?:boolean;
  offset?:number;
  origin:string;
  type?:string;
}

export interface FindFlightResults {
  FindFlightResult:FindFlightStruct;
}

export interface FindFlightStruct {
  flights:FindFlightMatch[];
  next_offset:number;
  num_flights:number;
}

export interface FlightCancellationStatisticsRequest {
  howMany?:number;
  ident_filter?:string;
  offset?:number;
  time_period:string;
  type_matching:string;
}

export interface FlightCancellationStatisticsResults {
  FlightCancellationStatisticsResult:CancellationSummaryStruct;
}

export interface FlightInfoStatusRequest {
  filter?:string;
  howMany?:number;
  ident:string;
  include_ex_data?:boolean;
  offset?:number;
}

export interface FlightInfoStatusResults {
  FlightInfoStatusResult:ArrayOfFlightInfoStatusStruct;
}

export interface FlightInfoStatusStruct {
  actual_arrival_time?:Timestamp;
  actual_blockin_time?:Timestamp;
  actual_blockout_time?:Timestamp;
  actual_departure_time?:Timestamp;
  adhoc:boolean;
  aircrafttype?:string;
  airline?:string;
  arrival_delay?:number;
  bag_claim?:string;
  blocked:boolean;
  cancelled:boolean;
  codeshares?:string;
  datalink?:boolean;
  departure_delay?:number;
  destination?:AirportDisplayStruct;
  display_aircrafttype?:string;
  display_filed_altitude?:string;
  distance_filed?:number;
  diverted:boolean;
  estimated_arrival_time?:Timestamp;
  estimated_blockin_time?:Timestamp;
  estimated_blockout_time?:Timestamp;
  estimated_departure_time?:Timestamp;
  faFlightID:string;
  filed_airspeed_kts?:number;
  filed_airspeed_mach?:number;
  filed_altitude?:number;
  filed_arrival_time?:Timestamp;
  filed_blockin_time?:Timestamp;
  filed_blockout_time?:Timestamp;
  filed_departure_time?:Timestamp;
  filed_ete?:number;
  flightnumber?:string;
  full_aircrafttype?:string;
  gate_dest?:string;
  gate_orig?:string;
  ident:string;
  inbound_faFlightID?:string;
  origin?:AirportDisplayStruct;
  progress_percent?:number;
  route?:string;
  seats_cabin_business?:number;
  seats_cabin_coach?:number;
  seats_cabin_first?:number;
  status?:string;
  tailnumber?:string;
  terminal_dest?:string;
  terminal_orig?:string;
  type:string;
}

export interface FlightRouteStruct {
  distance_from_origin?:number;
  distance_this_leg?:number;
  distance_to_destination?:number;
  latitude?:number;
  longitude?:number;
  name:string;
  outbound_course?:number;
  type:string;
}

export interface ForecastCloudsStruct {
  altitude?:string;
  coverage?:string;
  special?:string;
  symbol:string;
}

export interface ForecastLineStruct {
  barometric?:string;
  clouds?:ForecastCloudsStruct[];
  forecast_line_end:number;
  forecast_line_start:number;
  forecast_line_type:string;
  icing_layers?:string;
  significant_weather?:string;
  turbulence_layers?:string;
  visibility?:ForecastVisibilityStruct;
  winds?:ForecastWindStruct;
  windshear?:ForecastWindshear;
}

export interface ForecastVisibilityStruct {
  symbol:string;
  units?:string;
  visibility:string;
}

export interface ForecastWindshear {
  direction:string;
  height:string;
  speed?:string;
  symbol:string;
  units?:string;
}

export interface ForecastWindStruct {
  direction:string;
  peak_gusts?:number;
  speed:number;
  symbol:string;
  units?:string;
}

export interface GetFlightTrackRequest {
  ident:string;
  include_position_estimates?:boolean;
}

export interface GetFlightTrackResults {
  GetFlightTrackResult:ArrayOfTrackStruct;
}

export interface LatLongsToDistanceRequest {
  lat1:number;
  lat2:number;
  lon1:number;
  lon2:number;
}

export interface LatLongsToDistanceResults {
  LatLongsToDistanceResult:number;
}

export interface LatLongsToHeadingRequest {
  lat1:number;
  lat2:number;
  lon1:number;
  lon2:number;
}

export interface LatLongsToHeadingResults {
  LatLongsToHeadingResult:number;
}

export interface NearbyAirportsRequest {
  airport_code?:string;
  howMany?:number;
  latitude?:number;
  longitude?:number;
  offset?:number;
  only_iap?:boolean;
  radius:number;
}

export interface NearbyAirportsResults {
  NearbyAirportsResult:NearbyAirportsStruct;
}

export interface NearbyAirportsStruct {
  airports:AirportStruct[];
  next_offset:number;
}

export interface RoutesBetweenAirportsRequest {
  destination:string;
  howMany?:number;
  max_file_age:string;
  offset?:number;
  origin:string;
  sort_by:string;
}

export interface RoutesBetweenAirportsResults {
  RoutesBetweenAirportsResult:ArrayOfRoutesBetweenAirportsStruct;
}

export interface RoutesBetweenAirportsStruct {
  aircrafttypes:string;
  count:number;
  filed_altitude_max:number;
  filed_altitude_min:number;
  last_departuretime:number;
  route:string;
  route_distance?:string;
}

export interface TailOwnerRequest {
  ident:string;
}

export interface TailOwnerResults {
  TailOwnerResult:TailOwnerStruct;
}

export interface TailOwnerStruct {
  location:string;
  location2:string;
  owner:string;
  website:string;
}

export interface Timestamp {
  date?:string;
  dow?:string;
  epoch:number;
  localtime?:number;
  time?:string;
  tz?:string;
}

export interface TrackAirportStruct {
  flights?:FlightInfoStatusStruct[];
  next_offset:number;
  num_flights:number;
}

export interface TrackStruct {
  altitude:number;
  altitude_change:string;
  altitude_status:string;
  groundspeed:number;
  latitude:number;
  longitude:number;
  timestamp:number;
  update_type:string;
}

export interface WeatherConditionsArrayStruct {
  conditions:WeatherConditionsStruct[];
  next_offset:number;
}

export interface WeatherConditionsCloudStruct {
  altitude?:number;
  symbol:string;
  type:string;
}

export interface WeatherConditionsRequest {
  airport_code:string;
  howMany?:number;
  offset?:number;
  return_nearby_weather?:boolean;
  temperature_units?:string;
  weather_date?:number;
}

export interface WeatherConditionsResults {
  WeatherConditionsResult:WeatherConditionsArrayStruct;
}

export interface WeatherConditionsStruct {
  airport_code:string;
  cloud_friendly:string;
  clouds?:WeatherConditionsCloudStruct[];
  conditions:string;
  pressure:number;
  pressure_units:string;
  raw_data:string;
  temp_air:number;
  temp_dewpoint:number;
  temp_perceived:string;
  temp_relhum:number;
  time:number;
  visibility:number;
  visibility_units:string;
  wind_direction:number;
  wind_friendly:string;
  wind_speed:number;
  wind_speed_gust:number;
  wind_units:string;
}

export interface WeatherForecastRequest {
  airport_code:string;
  return_nearby_weather?:boolean;
  weather_date?:number;
}

export interface WeatherForecastResults {
  WeatherForecastResult:WeatherForecastStruct;
}

export interface WeatherForecastStruct {
  airport_code:string;
  decoded_forecast?:DecodedForecastStruct;
  raw_forecast:string[];
  timestring:string;
}

export interface ZipcodeInfoRequest {
  zipcode:string;
}

export interface ZipcodeInfoResults {
  ZipcodeInfoResult:ZipcodeInfoStruct;
}

export interface ZipcodeInfoStruct {
  city:string;
  county:string;
  latitude:number;
  longitude:number;
  state:string;
}

