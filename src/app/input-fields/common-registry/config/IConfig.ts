/*
 * Interface to store the configurations objects in the registry
 */
export interface IConfig {
    id: any;
    view?: any;
    children?: IConfig[];
}