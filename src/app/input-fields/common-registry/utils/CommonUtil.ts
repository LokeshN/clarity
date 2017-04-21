/**
 * Common utility class 
 */
export class CommonUtil {

    /**
     * Checks for two objects equality by looping and checking each and every property
     * value
     */
    public static checkObjectEquals(object1: any, object2: any): boolean {
        if (typeof object1 === "string" && typeof object2 === "string") {
            return object1 === object2;
        } else if (CommonUtil.isObject(object1) && CommonUtil.isObject(object2)) {
            return Object.keys(object1).length === Object.keys(object2).length &&
                   CommonUtil.compareKeys(object1, object2);
        }

        return false;
    }

    /**
     * Checks if Array contains the object passed in the params
     */
    public static checkArrayContains(array: Array<any>, object: any): boolean {
        for (let i = 0; i < array.length; i++) {
            let object1: any = array[i];
            if (typeof object1 === "string" && typeof object === "string") {
                return object1 === object;
            } else if (CommonUtil.isObject(object1) && CommonUtil.isObject(object)) {
                return Object.keys(object1).length === Object.keys(object).length &&
                       CommonUtil.compareKeys(object1, object);
            }
        }
        return false;
    }

    private static compareKeys(object1: any, object2: any): boolean {
        //loop and compare each property
        for (let prop in object1) {
            //if prop is also an object, (nested object) then check that one also
            if (CommonUtil.isObject(object1[prop]) && CommonUtil.isObject(object2[prop])) {
                return CommonUtil.compareKeys(object1[prop], object2[prop]);
            } else if (object1[prop] !== object2[prop]) {
                return false;
            }
        }

        return true;
    }

    private static isObject(prop: any) {
        if (typeof prop === "object") {
            return true;
        }

        return false;
    }
}