import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {RendererUtil} from "../common-registry/utils/RendererUtil";
//import {RendererFactory} from "../ui-factory/utils/RendererFactory";
//import {Registry} from "../ui-factory/registry/Registry";

@Component({
    moduleId: module.id,
    selector: "main",
    template: `
        <div>
            <div #view></div>
        </div>
    `
})
export class MainComponent implements OnInit {

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        this.rendererUtil.renderComponent(this.viewDiv, "SCALE_IN");
    }
}