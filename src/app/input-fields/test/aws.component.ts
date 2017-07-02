import {Component} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {ScaleInComponent} from "./scalein.component";

@Register({
    id: AwsComponent.ID,
    parentId: ScaleInComponent.ID
})
@Component({
    moduleId: module.id,
    template: `
        <h3> AWS </h3>
    `
})
export class AwsComponent {
    public static ID: string = "AWS";

}