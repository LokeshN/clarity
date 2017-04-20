import {Injectable, ViewContainerRef} from "@angular/core";
import {RendererFactory} from "./RendererFactory";

/**
 * Renderer utility for rendering the registered view into any component
 * Note that component has to be an instance of 'ViewContainerRef'
 */
@Injectable()
export class RendererUtil {

    constructor(private rendererFactory: RendererFactory) {
    }

	/**
	 * Renders UI component registered with the Registry into the parentComponent
	 * based on the id configuation and also the parent id configuration if present
	 */
    public renderComponent(containerRef: ViewContainerRef,
                           id: any, parentId?: any): void {
        let componentFactory: any = this.rendererFactory.getComponentFactory(id, parentId);
        if (componentFactory) {
            containerRef.createComponent(componentFactory);
        }
    }
}