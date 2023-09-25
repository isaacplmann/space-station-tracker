export interface IChannelItem {
    description: string;
    guid: string;
    pubDate: string;
    title: string;
}
interface IChannel {
    title: string;
    link: string;
    description: string;
    language: string;
    pubDate: string;
    lastBuildDate: string;
    managingEditor: string;
    webMaster: string;
    item: IChannelItem[];
}
interface IRSS {
    channel: IChannel;
}
export interface SpotTheStationResponse {
    rss: IRSS;
}
