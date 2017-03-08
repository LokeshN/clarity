import {Component, Injector} from "@angular/core";

//import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {BaseActionComponent} from "./base-action.component";
import {Register, Context} from "../renderers/config";

@Register({
        name: "SCALE IN",
        id: "SCALE_IN",
        context: Context.STATIC,
        view: ScaleInActionComponent
    })
@Component({
    moduleId: module.id,
    templateUrl: "./scalein-action.html"

})
export class ScaleInActionComponent extends BaseActionComponent {

    constructor(injector: Injector) {
        super(injector);
    }
}