import {Component} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {ScaleInComponent} from "./scalein.component";

@Register({
    id: AzureComponent.ID,
    parentId: ScaleInComponent.ID
})
@Component({
    moduleId: module.id,
    template: `
        <h3> AZURE </h3>
    `
})
export class AzureComponent {
    public static ID: string = "AZURE";

}