import { DateTime } from 'luxon';

export interface ICleanData {
    approachDeg: string;
    approachDir: string;
    date: DateTime | string; // TODO: rework
    departureDeg: string;
    departureDir: string;
    duration: string;
    maxElevation: string;
    time: string;
}
