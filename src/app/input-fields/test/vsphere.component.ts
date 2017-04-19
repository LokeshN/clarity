import {Component} from "@angular/core";
import {Register} from "../ui-factory/registry/Registry";

@Register({
    id: "VSPHERE",
    parentId: "SCALE_IN"
})
@Component({
    moduleId: module.id,
    template: `
        <h2> VSPHERE </h2>
    `
})
export class VsphereComponent {

}