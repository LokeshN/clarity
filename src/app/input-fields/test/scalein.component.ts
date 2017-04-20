import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {RendererUtil} from "../common-registry/utils/RendererUtil";

@Register({
        id: ScaleInComponent.ID
    })
@Component({
    moduleId: module.id,
    template: `
        <H2> Scale IN</H2>
        <div style="height:35px" #view></div>
    `
})
export class ScaleInComponent implements OnInit {

    public static ID: string = "SCALE_IN";

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        this.rendererUtil.renderComponent(this.viewDiv, "VSPHERE", ScaleInComponent.ID);
    }
}