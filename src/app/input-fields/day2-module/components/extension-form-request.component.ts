import {Component} from "@angular/core";

import {BaseRequestComponent} from "./base-request.component";
import {Register} from "../../common-registry/registry/Registry";

@Register({
    id: ExtensionFormRequestComponent.ID
})
@Component({
    moduleId: module.id,
    templateUrl: "./extension-form-request.html"
})
export class ExtensionFormRequestComponent extends BaseRequestComponent {
    public static ID: string = "EXTENSION_FORM";
}