let a = {
    name: "Roma",
    value: [25, 50, 75],
    isActive() {
      return true;
    },
    newList: {
      serName: "BMW",
      value2: [5, 15, 10],
      sayHi() {
        return "Hi";
      },
      newList2: {
        name2: "Vladik",
        value3: [150, 225, 300],
      },
    },
};
  
function cloneObject(obj) {
    let newObj = {};

    if (typeof obj === "object") {
        for (let key in obj) {
            let property = obj[key],
            type = typeof property;
            switch (type) {
                case "object":
                    if (Object.prototype.toString.call(property) === "[object Array]") {
                        newObj[key] = [];
                        for (let item of property) {
                            newObj[key].push(this.cloneObject(item));
                        }
                    } else {
                        newObj[key] = cloneObject(property);
                    }
                break;
                default:
                newObj[key] = property;
                break;
            }
        }
        return newObj;
        } else {
        return obj;
    }
}
  
let res = cloneObject(a);

console.log(a);
console.log(res);
