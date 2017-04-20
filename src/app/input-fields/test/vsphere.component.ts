import {Component} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {ScaleInComponent} from "./scalein.component";

@Register({
    id: VsphereComponent.ID,
    parentId: ScaleInComponent.ID
})
@Component({
    moduleId: module.id,
    template: `
        <h3> VSPHERE </h3>
    `
})
export class VsphereComponent {
    public static ID: string = "VSPHERE";

}