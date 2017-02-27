import {Component, Input} from "@angular/core";

@Component({
    selector: "dynamic-component",
    moduleId: module.id,
    templateUrl: "./dynamic-component-layout.html"
})
export class DynamicComponent {
    @Input() dataType: string;
    @Input() id: string;
}