import {Component, Injector} from "@angular/core";

import {ActionFormRendererContext} from "../renderers/action-form-renderer-context";
import {BaseActionComponent} from "./base-action.component";

@Component({
    moduleId: module.id,
    templateUrl: "./scalein-action.html"

})
export class ScaleInActionComponent extends BaseActionComponent {
    private context: ActionFormRendererContext;

    constructor(private injector: Injector) {
        super();
        this.context = this.injector.get(ActionFormRendererContext);
        this.context.contextData = {
            header: "Scale In",
            title: "Scale In",
            titleImgSrc: "http://test.com",
            contentData: {
                test: "LOKN"
            }
        };
    }
}