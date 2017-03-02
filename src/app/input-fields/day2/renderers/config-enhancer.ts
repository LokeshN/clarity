import {Injectable} from "@angular/core";

import {Context, IConfig} from "./config";
import {BaseActionComponent} from "../actions/base-action.component";

@Injectable()
export class ConfigEnhancer {

    enhanceConfig(config: Array<IConfig>): Array<IConfig> {
        for (let i = 0; i < config.length; i++) {
            if (config[i].context === Context.FORMLESS) {
                config[i].view = BaseActionComponent;
            }
        }
        return config;
    }

}