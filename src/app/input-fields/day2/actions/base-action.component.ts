import {Component, Injector, OnInit, ComponentFactoryResolver} from "@angular/core";

import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {ContextConfigMapper} from "../renderers/context-config-mapper";

@Component({
    moduleId : module.id,
    templateUrl: "./base-action.html"

})
export class BaseActionComponent implements OnInit {
    context: ActionFormRendererContext;

    constructor(private injector: Injector) {
        this.context = this.injector.get(ActionFormRendererContext);
    }

    validate(): boolean {
        console.log("base action component log");
        return true;
    }

    ngOnInit() {
        //get the data from the context
    }

    getComponent(component: any): any {
        return this.injector.get(component);
    }

    getComponentFactoryResolver(): ComponentFactoryResolver {
        return this.injector.get(ComponentFactoryResolver);
    }

    getContextConfigMapper(): ContextConfigMapper {
        return this.injector.get(ContextConfigMapper);
    }

}