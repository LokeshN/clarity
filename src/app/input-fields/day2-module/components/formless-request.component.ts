import {Component} from "@angular/core";

import {BaseRequestComponent} from "./base-request.component";
import {Register} from "../../common-registry/registry/Registry";

@Register({
    id: FormlessRequestComponent.ID,
    contextAliases: FormlessRequestComponent.ALIASES
})
@Component({
    moduleId: module.id,
    templateUrl: "./formless-request.html"
})
export class FormlessRequestComponent extends BaseRequestComponent {
    public static ID: string = "FORM_LESS";

    public static ALIASES: Array<any> = ["SHUTDOWN", "POWEROFF", "REBOOT"];
}