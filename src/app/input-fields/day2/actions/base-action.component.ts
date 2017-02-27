import {Component} from "@angular/core";

@Component({
    moduleId : module.id,
    templateUrl: "base-action-form.html"

})
export class BaseActionComponent {

    constructor() {

    }

    validate(): boolean {
        console.log("base action component log");
        return true;
    }

}