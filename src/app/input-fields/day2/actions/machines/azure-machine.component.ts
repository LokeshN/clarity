import {Component} from "@angular/core";
import {Register, Context} from "../../renderers/config";

@Register({
        name: "AZURE",
        id: "AZURE",
        context: Context.STATIC,
        parentId: "SCALE_IN"
    })
@Component({
    moduleId: module.id,
    templateUrl: "./azure-machine.html"
})
export class AzureMachineComponent {

}