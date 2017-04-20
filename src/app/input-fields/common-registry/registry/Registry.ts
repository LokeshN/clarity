import {Injectable} from "@angular/core";

import {IConfig} from "../config/IConfig";
import {IRegisterConfig} from "../config/IRegisterConfig";
import {CommonUtil} from "../utils/CommonUtil";



/**
 * Annotation to register any new user interface to either Root or any child configuration 
 * objects already registered in the framework 
 */

export function Register(registerConfig: IRegisterConfig) {
    let _registry: PrivateRegistry = PrivateRegistry.getInstance();

    function findParent(parentId: any, parentConfig: Array<IConfig>): IConfig {
        if (!parentConfig || !parentId) {
            return null;
        }
        for (let i = 0; i < parentConfig.length; i++) {
            // if parentId typeof string, then simple string check is enough, else have to check 
            // all the properties for equality
            if (CommonUtil.checkObjectEquals(parentConfig[i].id, parentId)) {
                return parentConfig[i];
            } else {
                let config: IConfig = findParent(parentId, parentConfig[i].children);
                if (config) {
                    return config;
                }
            }
        }

        return null;
    }

    return function (target: Function) {
        let configObj: IConfig = {
                id: registerConfig.id,
                view: target
            };
        let config: Array<IConfig> = _registry.getConfig();
        if (registerConfig.parentId) {
            //loop and find
            let parentConfig: IConfig = findParent(registerConfig.parentId, config);
            if (!parentConfig.children) {
                parentConfig.children = [];
            }

            parentConfig.children.push(configObj);
        } else {
            config.push(configObj);
        }
    };
}


/**
 * Wrapper around private registry to maintain one registry per usage in angular module.
 */
@Injectable()
export class Registry {
    private registry: PrivateRegistry = PrivateRegistry.getInstance();

    public getConfig(): Array<IConfig> {
        return this.registry.getConfig();
    }

    public getComponentRef(type: any, parentType?: any): any {
        return this.registry.getComponentRef(type, parentType);
    }

}

/**
 * Singleton class which maintains the internal configurations of registrations to the 
 * framemwork
 * This class is not exposed outside. The main usage of this class is in @Register function
 * defined above where you cannot inject the registry angular way
 */
class PrivateRegistry {

    //List of config objects registered
    private config: Array<IConfig> = [];
    private static registry: PrivateRegistry;

    public getConfig(): Array<IConfig> {
        return this.config;
    }

    public getComponentRef(type: any, parentType?: any): any {
        if (!type) {
            return null;
        }

        return this.getComponentRefInternal(type, parentType, this.config, null);
    }

    public static getInstance(): PrivateRegistry {
        if (!PrivateRegistry.registry) {
            PrivateRegistry.registry = new PrivateRegistry();
        }

        return PrivateRegistry.registry;
    }

    //Usual DFS, need to check if there is any efficient way.
    private getComponentRefInternal(type: any, parentType: any,
                                    configList: Array<IConfig>, parentConfig: IConfig): any {
       if (!type || !configList || configList.length === 0) {
           return null;
       }

       if (!parentType || (parentConfig && CommonUtil.checkObjectEquals(parentType, parentConfig.id))) {
           for (let i = 0;  i < configList.length; i++) {
               if (CommonUtil.checkObjectEquals(type, configList[i].id)) {
                   return configList[i].view;
               }
           }
           return null;
       }


       for (let i = 0;  i < configList.length; i++) {
           let componentRef: any = this.getComponentRefInternal(type,
                                        parentType, configList[i].children, configList[i]);
           if (componentRef) {
               return componentRef;
           }
       }
    }
}