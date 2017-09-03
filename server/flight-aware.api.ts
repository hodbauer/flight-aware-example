import * as rp from 'request-promise';
import {
    AircraftType, AircraftTypeStruct, AirlineFlightSchedules, AirlineInfo, AirlineInfoStruct, AirportBoards, AirportBoardsStruct,
    AirportDelays, AirportDelayStruct, AirportInfo, AirportStruct,
    ArrayOfAirlineFlightScheduleStruct, ArrayOfCountAirlineOperationsStruct, ArrayOfFlightInfoStatusStruct, ArrayOfFlightRouteStruct,
    ArrayOfRoutesBetweenAirportsStruct,
    ArrayOfTrackStruct,
    BlockIdentCheck,
    CancellationSummaryStruct,
    CountAirportOperations,
    CountAirportOperationsStruct,
    CountAllEnrouteAirlineOperations, DecodeFlightRoute, DecodeRoute, FindFlight, FindFlightStruct, FlightCancellationStatistics,
    FlightInfoStatus, GetFlightTrack, LatLongsToDistance, LatLongsToHeading, NearbyAirports, NearbyAirportsStruct, RoutesBetweenAirports,
    TailOwner, TailOwnerStruct, WeatherConditions, WeatherConditionsArrayStruct, WeatherForecast, WeatherForecastStruct, ZipcodeInfo,
    ZipcodeInfoStruct
} from './flight-aware.interface';
import {apiKey, username} from './private/data';

const fxmlUrl = `https://${username}:${apiKey}@flightxml.flightaware.com/json/FlightXML3/`;

let base = {
    uri: '',
    qs: {},
    json: true
};
export async function AircraftType(qs:AircraftType):Promise<AircraftTypeStruct> {
    base.uri = fxmlUrl + 'AircraftType';
    base.qs = qs;
    return (await rp.get(base)).AircraftTypeResult;
}

export async function AirlineFlightSchedules(qs:AirlineFlightSchedules):Promise<ArrayOfAirlineFlightScheduleStruct> {
    base.uri = fxmlUrl + 'AirlineFlightSchedules';
    base.qs = qs;
    return (await rp.get(base)).AirlineFlightSchedulesResult;
}

export async function AirlineInfo(qs:AirlineInfo):Promise<AirlineInfoStruct> {
    base.uri = fxmlUrl + 'AirlineInfo';
    base.qs = qs;
    return (await rp.get(base)).AirlineInfoResult;
}

export async function AirportBoards(qs:AirportBoards):Promise<AirportBoardsStruct> {
    base.uri = fxmlUrl + 'AirportBoards';
    base.qs = qs;
    return (await rp.get(base)).AirportBoardsResult;
}

export async function AirportDelays(qs:AirportDelays):Promise<AirportDelayStruct> {
    base.uri = fxmlUrl + 'AirportDelays';
    base.qs = qs;
    return (await rp.get(base)).AirportDelaysResult;
}

export async function AirportInfo(qs:AirportInfo):Promise<AirportStruct> {
    base.uri = fxmlUrl + 'AirportInfo';
    base.qs = qs;
    return (await rp.get(base)).AirportInfoResult;
}

export async function BlockIdentCheck(qs:BlockIdentCheck):Promise<number> {
    base.uri = fxmlUrl + 'BlockIdentCheck';
    base.qs = qs;
    return (await rp.get(base)).BlockIdentCheckResult;
}

export async function CountAirportOperations(qs:CountAirportOperations):Promise<CountAirportOperationsStruct> {
    base.uri = fxmlUrl + 'CountAirportOperations';
    base.qs = qs;
    return (await rp.get(base)).CountAirportOperationsResult;
}

export async function CountAllEnrouteAirlineOperations(qs:CountAllEnrouteAirlineOperations):Promise<ArrayOfCountAirlineOperationsStruct> {
    base.uri = fxmlUrl + 'CountAllEnrouteAirlineOperations';
    base.qs = qs;
    return (await rp.get(base)).CountAllEnrouteAirlineOperationsResult;
}

export async function DecodeFlightRoute(qs:DecodeFlightRoute):Promise<ArrayOfFlightRouteStruct> {
    base.uri = fxmlUrl + 'DecodeFlightRoute';
    base.qs = qs;
    return (await rp.get(base)).DecodeFlightRouteResult;
}

export async function DecodeRoute(qs:DecodeRoute):Promise<ArrayOfFlightRouteStruct> {
    base.uri = fxmlUrl + 'DecodeRoute';
    base.qs = qs;
    return (await rp.get(base)).DecodeRouteResult;
}

export async function FindFlight(qs:FindFlight):Promise<FindFlightStruct> {
    base.uri = fxmlUrl + 'FindFlight';
    base.qs = qs;
    return (await rp.get(base)).FindFlightResult;
}

export async function FlightCancellationStatistics(qs:FlightCancellationStatistics):Promise<CancellationSummaryStruct> {
    base.uri = fxmlUrl + 'FlightCancellationStatistics';
    base.qs = qs;
    return (await rp.get(base)).FlightCancellationStatisticsResult;
}

export async function FlightInfoStatus(qs:FlightInfoStatus):Promise<ArrayOfFlightInfoStatusStruct> {
    base.uri = fxmlUrl + 'FlightInfoStatus';
    base.qs = qs;
    return (await rp.get(base)).FlightInfoStatusResult;
}

export async function GetFlightTrack(qs:GetFlightTrack):Promise<ArrayOfTrackStruct> {
    base.uri = fxmlUrl + 'GetFlightTrack';
    base.qs = qs;
    return (await rp.get(base)).GetFlightTrackResult;
}

export async function LatLongsToDistance(qs:LatLongsToDistance):Promise<number> {
    base.uri = fxmlUrl + 'LatLongsToDistance';
    base.qs = qs;
    return (await rp.get(base)).LatLongsToDistanceResult;
}

export async function LatLongsToHeading(qs:LatLongsToHeading):Promise<number> {
    base.uri = fxmlUrl + 'LatLongsToHeading';
    base.qs = qs;
    return (await rp.get(base)).LatLongsToHeadingResult;
}

export async function NearbyAirports(qs:NearbyAirports):Promise<NearbyAirportsStruct> {
    base.uri = fxmlUrl + 'NearbyAirports';
    base.qs = qs;
    return (await rp.get(base)).NearbyAirportsResult;
}

export async function RoutesBetweenAirports(qs:RoutesBetweenAirports):Promise<ArrayOfRoutesBetweenAirportsStruct> {
    base.uri = fxmlUrl + 'RoutesBetweenAirports';
    base.qs = qs;
    return (await rp.get(base)).RoutesBetweenAirportsResult;
}

export async function TailOwner(qs:TailOwner):Promise<TailOwnerStruct> {
    base.uri = fxmlUrl + 'TailOwner';
    base.qs = qs;
    return (await rp.get(base)).TailOwnerResult;
}

export async function WeatherConditions(qs:WeatherConditions):Promise<WeatherConditionsArrayStruct> {
    base.uri = fxmlUrl + 'WeatherConditions';
    base.qs = qs;
    return (await rp.get(base)).WeatherConditionsResult;
}

export async function WeatherForecast(qs:WeatherForecast):Promise<WeatherForecastStruct> {
    base.uri = fxmlUrl + 'WeatherForecast';
    base.qs = qs;
    return (await rp.get(base)).WeatherForecastResult;
}

export async function ZipcodeInfo(qs:ZipcodeInfo):Promise<ZipcodeInfoStruct> {
    base.uri = fxmlUrl + 'ZipcodeInfo';
    base.qs = qs;
    return (await rp.get(base)).ZipcodeInfoResult;
}

