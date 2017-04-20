import {Component} from "@angular/core";
import {BaseRequestComponent} from "./base-request.component";

import {Register} from "../../common-registry/registry/Registry";

@Register({
    id: FormRequestComponent.ID
})
@Component({
    moduleId: module.id,
    templateUrl: "./form-request.html"
})
export class FormRequestComponent extends BaseRequestComponent {
    public static ID: string = "FORM";
}