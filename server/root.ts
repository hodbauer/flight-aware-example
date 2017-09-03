import {
    AircraftType,
    AirlineFlightSchedules,
    AirlineInfo,
    AirportBoards,
    AirportDelays,
    AirportInfo,
    BlockIdentCheck,
    CountAirportOperations,
    CountAllEnrouteAirlineOperations,
    DecodeFlightRoute,
    DecodeRoute,
    FindFlight,
    FlightCancellationStatistics,
    FlightInfoStatus,
    GetFlightTrack,
    LatLongsToDistance,
    LatLongsToHeading,
    NearbyAirports,
    RoutesBetweenAirports,
    TailOwner,
    WeatherConditions,
    WeatherForecast,
    ZipcodeInfo
} from './flight-aware.api';

export const root = {
    flightAware: {
        AircraftType,
        AirlineFlightSchedules,
        AirlineInfo,
        AirportBoards,
        AirportDelays,
        AirportInfo,
        BlockIdentCheck,
        CountAirportOperations,
        CountAllEnrouteAirlineOperations,
        DecodeFlightRoute,
        DecodeRoute,
        FindFlight,
        FlightCancellationStatistics,
        FlightInfoStatus,
        GetFlightTrack,
        LatLongsToDistance,
        LatLongsToHeading,
        NearbyAirports,
        RoutesBetweenAirports,
        TailOwner,
        WeatherConditions,
        WeatherForecast,
        ZipcodeInfo
    }
};