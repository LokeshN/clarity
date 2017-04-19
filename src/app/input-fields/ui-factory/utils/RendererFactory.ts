import {Injectable, ComponentFactoryResolver} from "@angular/core";
import {Registry} from "../registry/Registry";

/**
 * Factory class which will create the component based on the given input config.
 * Factory will look into the Registry for the registered component and returns
 * the corresponding component
 */
 @Injectable()
export class RendererFactory {

    constructor(private registry: Registry,
                private componentFactoryResolver: ComponentFactoryResolver) {
    }

	/**
	 * Returns the component factory for the ui component which is registered based on the type
	 * type can be a simple string or can be an object also.
	 */
    public getComponentFactory(type: any, parentType?: any): any {
        let componentRef: any = this.getComponentRefBasedonType(type, parentType);
        let componentFactory: any = null;
        if (componentRef) {
            componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentRef);
        }
        return componentFactory;
    }

    public getComponentRefBasedonType(type: any, parentType?: any) {
        return this.registry.getComponentRef(type, parentType);
    }
}