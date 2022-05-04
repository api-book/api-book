export interface MenuItem {
    name: string;
    group?: string;
    url?: string;
}

export interface Config {
    publicPath: string;
    lang: string;
    editDevOnly: boolean;
    exportDevOnly: boolean;
    dots: string[];
}
