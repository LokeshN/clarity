/**
 * Registry Configuration which is passed into @Register annotation
 * in component class
 */
export interface IRegisterConfig {
    id: any;
    parentId?: any;
    contextAliases?: Array<any>;
}