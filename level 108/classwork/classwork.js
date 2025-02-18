// 2) შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა განმეორებად ელემეტს მასივში ან სტრინგში.
function firstNonRepeatingElement(input) {
    const elementCount = new Map();
    for (let element of input) {
      elementCount.set(element, (elementCount.get(element) || 0) + 1);
    }
    for (let element of input) {
      if (elementCount.get(element) === 1) {
        return element;
      }
    }
}
  