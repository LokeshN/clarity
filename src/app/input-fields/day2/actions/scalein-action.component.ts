import {Component, Injector, OnInit, ViewChild,
    ComponentFactoryResolver, ViewContainerRef} from "@angular/core";

//import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {BaseActionComponent} from "./base-action.component";
import {Register, Context} from "../renderers/config";

@Register({
        name: "SCALE IN",
        id: "SCALE_IN",
        context: Context.STATIC
    })
@Component({
    moduleId: module.id,
    templateUrl: "./scalein-action.html"

})
export class ScaleInActionComponent extends BaseActionComponent implements OnInit {

    @ViewChild("child", {read: ViewContainerRef}) child: ViewContainerRef;
    private componentFactoryResolver: ComponentFactoryResolver;

    constructor(injector: Injector) {
        super(injector);
        this.componentFactoryResolver = injector.get(ComponentFactoryResolver);
    }

    ngOnInit() {
        let child: any = this.getContextConfigMapper()
                        .getChildRendererFormBasedOnAction("SCALE_IN", this.context.contextData.subAction);
        let childFactory: any = this.componentFactoryResolver.resolveComponentFactory(child);
        this.child.createComponent(childFactory);
    }
}