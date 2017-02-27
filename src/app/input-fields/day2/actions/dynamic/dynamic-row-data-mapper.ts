import {Injectable} from "@angular/core";
import {DynamicComponentModel} from "./dynamic-component-model";

@Injectable()
export class DynamicRowDataMapper {

    public mapRowsToComponents(rows: any): DynamicComponentModel[] {
        let components: DynamicComponentModel[] = [];
        rows.map((row: any) => {
            let items = row.items.map((item: any) => {
                let component = {
                    dataType: item.dataType.typeId,
                    label: item.label,
                    displayAdvice: item.displayAdvice,
                    facets: item.state.facets
                };
                return component;
            });
            components = components.concat(items);
        });

        return components;
    }

}