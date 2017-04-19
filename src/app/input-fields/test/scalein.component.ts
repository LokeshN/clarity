import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Register} from "../ui-factory/registry/Registry";
import {RendererUtil} from "../ui-factory/utils/RendererUtil";

@Register({
        id: "SCALE_IN"
    })
@Component({
    moduleId: module.id,
    template: `
        <H1> Scale IN</H1>
        <div #view></div>
    `
})
export class ScaleInComponent implements OnInit {

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        this.rendererUtil.renderComponent(this.viewDiv, "VSPHERE", "SCALE_IN");
    }
}