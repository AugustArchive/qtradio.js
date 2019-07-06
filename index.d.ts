// Typescript Typings for npm package: qtradio.js
// Project and Typings made by auguwu

declare module 'qtradio.js' {
    /**
     * Version constant for qtradio.ts
     */
    export const version: string;

    /**
     * Create an instance of the qtradio.ts client
     * You can do `new RadioClient()` but this is for lazy people
     * like the creator
     * @returns The instance
     */
    export function createInstance(): RadioClient;

    /** The client itself */
    export class RadioClient {
        constructor();
        public getInfo(): Promise<InfoData>;
    }

    /** Info data */
    export interface InfoData {
        icestats: {
            admin: string;
            host: string;
            location: string;
            server_id: string;
            server_start: string;
            server_start_iso8601: string;
            source: {
                artist: string;
                audio_bitrate: number;
                audio_channels: number;
                audio_info: string;
                audio_samplerate: number;
                channels: number;
                genre: string;
                'ice-bitrate': number;
                listener_peak: number;
                listeners: number;
                listenurl: string;
                samplerate: number;
                server_description: string;
                server_name: string;
                server_type: string;
                server_url: string;
                stream_start: string;
                stream_start_iso8601: string;
                subtype: string;
                title: string;
                dummy?: string;
            }[];
        }
    }
}