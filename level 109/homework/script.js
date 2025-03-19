// 2) მანუალური object.assign(): შექმენით ფუნქცია რომელიც იღებს მინიმუმ 2-ს მაქსიმუმ უთვალავ არგუმენტს (ობიექტებს) და აბრუნებს ამ ობიექტების გაერთიანებას

function manualObjectAssign(...objects) {
    if (objects.length < 2) {
        throw new Error("At least two objects are required.");
    }
    const target = {};
    objects.forEach(obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                target[key] = obj[key];
            }
        }
    });

    return target;
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };
const result = manualObjectAssign(obj1, obj2, obj3);
console.log(result);
