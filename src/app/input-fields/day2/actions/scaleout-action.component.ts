import {Component, Injector} from "@angular/core";

//import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {BaseActionComponent} from "./base-action.component";

@Component({
    moduleId: module.id,
    templateUrl: "./scaleout-action.html"

})
export class ScaleOutActionComponent extends BaseActionComponent {

    constructor(injector: Injector) {
        super(injector);
    }
}
