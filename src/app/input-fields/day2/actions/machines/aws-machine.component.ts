import {Component} from "@angular/core";
import {Register, Context} from "../../renderers/config";

@Register({
        name: "AWS",
        id: "AWS",
        context: Context.STATIC,
        parentId: "SCALE_IN"
    })
@Component({
    moduleId: module.id,
    templateUrl: "./aws-machine.html"
})
export class AwsMachineComponent {

}