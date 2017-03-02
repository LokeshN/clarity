export interface IRenderer {
    init(): void;
    getRootComponent(action: string): any;
}