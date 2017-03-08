import {Component, Injector} from "@angular/core";

//import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {BaseActionComponent} from "./base-action.component";
import {Register, Context} from "../renderers/config";

@Register({
        name: "SCALE OUT",
        id: "SCALE_OUT",
        context: Context.STATIC,
        view: ScaleOutActionComponent
    })
@Component({
    moduleId: module.id,
    templateUrl: "./scaleout-action.html"

})
export class ScaleOutActionComponent extends BaseActionComponent {

    constructor(injector: Injector) {
        super(injector);
    }
}
