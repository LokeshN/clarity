import {Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {Register} from "../common-registry/registry/Registry";
import {RendererUtil} from "../common-registry/utils/RendererUtil";

@Register({
        id: ScaleOutComponent.ID
    })
@Component({
    moduleId: module.id,
    template: `
        <H2> Scale OUT</H2>
        <div style="height:35px" #view></div>
    `
})
export class ScaleOutComponent implements OnInit {

    public static ID: string = "SCALE_OUT";

    constructor(private rendererUtil: RendererUtil) {
    }

    @ViewChild("view", {read: ViewContainerRef}) viewDiv: ViewContainerRef;

    ngOnInit() {
        //let rendererUtil: RendererUtil = new RendererUtil(new RendererFactory(new Registry()));
        //this.rendererUtil.renderComponent(this.viewDiv, "VSPHERE", ScaleInComponent.ID);
    }

    clearContents(element: any): void {
        let el: Node = element.nativeElement;
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
}