import {buildSchema} from 'graphql';

export const schema = buildSchema(`
type AircraftTypeStruct {
    description:String!
    engine_count:Int
    engine_type:String
    manufacturer:String!
    type:String!
}

type AirlineFlightScheduleStruct {
    actual_ident:String!
}

type TrackAirportStruct {
    flights:[FlightInfoStatusStruct]
    next_offset:Int!
    num_flights:Int
}

type FlightInfoStatusStruct {
    bag_claim:String
}


type ArrayOfAirlineFlightScheduleStruct {
    flights:[AirlineFlightScheduleStruct]!
    next_offset:Int!
}

type AirportDelayEntry {
    airport:String!
    category:String!
}

type CountAirlineOperationsStruct {
    enroute:Int
}

type FlightRouteStruct {
    distance_from_origin:Float
}

type FindFlightMatch {
    num_segments:Int
}

type CancellationRowStruct {
    cancellations:Int
}

type TrackStruct {
    altitude:Int
}

type RoutesBetweenAirportsStruct {
    aircrafttypes:String
}

type WeatherConditionsStruct {
    airport_code:String
}

type DecodedForecastStruct {
    forecast_end:Int
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

type AirportBoardsStruct {
    airport:String!
    airport_info:AirportStruct
    arrivals:TrackAirportStruct
    departures:TrackAirportStruct
    enroute:TrackAirportStruct
    scheduled:TrackAirportStruct
}

type AirportDelayStruct {
    delays:[AirportDelayEntry]!
    next_offset:Int!
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

type CountAirportOperationsStruct {
    departed:Int!
    enroute:Int!
    scheduled_arrivals:Int!
    scheduled_departures:Int!
}

type ArrayOfCountAirlineOperationsStruct {
    data:[CountAirlineOperationsStruct]!
}

type ArrayOfFlightRouteStruct {
    data:[FlightRouteStruct]!
    route_distance:String!
}

type FindFlightStruct {
    flights:[FindFlightMatch]!
    next_offset:Int!
    num_flights:Int!
}

type CancellationSummaryStruct {
    matching:[CancellationRowStruct]!
    next_offset:Int!
    total_cancellations_national:Int!
    total_cancellations_worldwide:Int!
    total_delays_worldwide:Int!
    type_matching:String!
}

type ArrayOfFlightInfoStatusStruct {
    flights:[FlightInfoStatusStruct]!
    next_offset:Int!
}

type ArrayOfTrackStruct {
    tracks:[TrackStruct]!
}

type NearbyAirportsStruct {
    airports:[AirportStruct]!
    next_offset:Int!
}

type ArrayOfRoutesBetweenAirportsStruct {
    data:[RoutesBetweenAirportsStruct]!
    next_offset:Int!
}

type TailOwnerStruct {
    location:String!
    location2:String!
    owner:String!
    website:String!
}

type WeatherConditionsArrayStruct {
    conditions:[WeatherConditionsStruct]!
    next_offset:Int!
}

type WeatherForecastStruct {
    airport_code:String!
    decoded_forecast:DecodedForecastStruct
    raw_forecast:[String]!
    timestring:String!
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
