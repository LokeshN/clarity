import {Injectable, ViewContainerRef} from "@angular/core";
import {RendererFactory} from "./RendererFactory";

@Injectable()
export class RendererUtil {

    constructor(private rendererFactory: RendererFactory) {
    }

	/**
	 * Renders UI component registered with the Registry into the parentComponent
	 * based on the type configuation and also the parent type configuration if present
	 */
    public renderComponent(parentComponent: ViewContainerRef,
                           type: any, parentType?: any): void {
        let componentFactory: any = this.rendererFactory.getComponentFactory(type, parentType);
        if (componentFactory) {
            parentComponent.createComponent(componentFactory);
        }
    }
}