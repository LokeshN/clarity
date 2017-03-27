export interface IRenderer {
    init(): void;
    getRootComponent(action: string): any;
    getChildComponent(parentAction: string, subAction: string): any;
}