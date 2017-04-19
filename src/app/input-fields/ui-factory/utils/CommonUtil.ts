export class CommonUtil {

    public static checkObjectEquals(object1: any, object2: any): boolean {
        if (typeof object1 === "string" && typeof object2 === "string") {
            return object1 === object2;
        } else if (typeof object1 === "object" && typeof object2 === "object") {
            return Object.keys(object1).length === Object.keys(object2).length &&
                   this.compareKeys(object1, object2);
        }

        return false;
    }

    private static compareKeys(object1: any, object2: any): boolean {
        for (let prop in object1) {
            if (object1[prop] !== object2[prop]) {
                return false;
            }
        }

        return true;
    }
}