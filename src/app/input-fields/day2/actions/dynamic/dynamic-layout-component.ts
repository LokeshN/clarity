import {Component, Injector} from "@angular/core";

import {DynamicRowDataMapper} from "./dynamic-row-data-mapper";
import {DynamicComponentModel} from "./dynamic-component-model";
import {BaseActionComponent} from "../base-action.component";

@Component({
    selector: "dynamic-layout",
    moduleId: module.id,
    templateUrl: "./dynamic-template.html"
})
export class DynamicLayoutComponent extends BaseActionComponent {
    private rowDataMapper: DynamicRowDataMapper;
    public components: DynamicComponentModel[];

    constructor(injector: Injector) {
        super(injector);
        this.rowDataMapper = this.getComponent(DynamicRowDataMapper);
    }

    ngOnInit() {
        let layout: any = "{\"layout\": {\"pages\": [{\"id\": null, \"label\": \"Resource action\", \"sections\": " +
        "[{\"id\": null, \"label\": \"Change Owner\", \"rows\": [{\"items\": [{\"type\": \"field\", \"size\": 2, " +
        "\"id\": \"provider-NewOwner\", " +
         "\"label\": \"New Owner\", \"dataType\": {\"type\": \"ref\", \"typeId\": \"email\", " +
         "\"componentTypeId\": null, \"componentId\": null, \"classId\": \"principal\", " +
         "\"typeFilter\": null, \"label\": null}, \"displayAdvice\": \"SEARCHER\", " +
         "\"permissibleValues\": {\"type\": \"dynamic\", \"customAllowed\": false, " +
         "\"dependencies\": []}, \"state\": {\"dependencies\": [], \"facets\":" +
         "[{\"type\": \"readOnly\", \"value\": {\"type\": \"constantClause\", " +
         "\"value\": {\"type\": \"boolean\"," +
         "\"value\": false}}}, {\"type\": \"mandatory\", " +
         "\"value\": {\"type\": \"constant\", \"value\": " +
         "{\"type\": \"boolean\", \"value\": true}}}]}, \"labelSize\": null, \"columns\": [], " +
         "\"isMultiValued\": false}]}], \"state\": {\"dependencies\": [], " +
         "\"facets\": []}}], \"state\": {\"dependencies\": [], \"facets\": []}}]}, " +
         "\"values\": {\"entries\": []}, \"fieldPrefixes\": null}";
        layout = JSON.parse(layout);
        //this.context.layout;
        let rows = layout.layout.pages[0].sections[0].rows;
        this.components = this.rowDataMapper.mapRowsToComponents(rows);
    }

}