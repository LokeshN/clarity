import {Component} from "@angular/core";
import {Register, Context} from "../../renderers/config";

@Register({
        name: "VSPHERE",
        id: "VSPHERE",
        context: Context.STATIC,
        parentId: "SCALE_IN"
    })
@Component({
    moduleId: module.id,
    templateUrl: "./vsphere-machine.html"
})
export class VSphereMachineComponent {

}