// v1) შექმენით მათემატიკის დამხმარე კლასი, ფროფერთიებით ( მაგ: Pi ) და მეთოდებით ( მაგ: ხარისხში აყვანა )
class MathHelper {
    static Pi = 3.141592653589793;
    static power(base, exponent) {
        return Math.pow(base, exponent);
    }
    static squareRoot(number) {
        return Math.sqrt(number);
    }
    static max(...numbers) {
        return Math.max(...numbers);
    }
    static min(...numbers) {
        return Math.min(...numbers);
    }
    static toDegrees(radians) {
        return radians * (180 / MathHelper.Pi);
    }
    static toRadians(degrees) {
        return degrees * (MathHelper.Pi / 180);
    }
}
console.log(MathHelper.Pi);
console.log(MathHelper.power(2, 3));
console.log(MathHelper.squareRoot(16));
console.log(MathHelper.max(1, 2, 3, 4, 5));
console.log(MathHelper.min(1, 2, 3, 4, 5)); 
console.log(MathHelper.toDegrees(MathHelper.Pi));
console.log(MathHelper.toRadians(180));


// 2) შექმენით რენდომ დამხმარე კლასი, ფროფერთიებით ( მაგ: CHAR_SET ) და მეთოდები ( მაგ: რენდომ ასო )
class RandomHelper {
    static CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static randomChar() {
        const index = RandomHelper.randomInt(0, RandomHelper.CHAR_SET.length - 1);
        return RandomHelper.CHAR_SET.charAt(index);
    }
    static randomString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += RandomHelper.randomChar();
        }
        return result;
    }
    static randomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }
}
console.log(RandomHelper.randomInt(1, 100));
console.log(RandomHelper.randomChar());
console.log(RandomHelper.randomString(10));
console.log(RandomHelper.randomColor());


// 3) შექმენით დროის დამხმარე კლასი, ფროფერთიებით ( მაგ: CREATION_TIME ) და მეთოდები ( მაგ: მილიწამების გადაყვანა წასაკითხ დროსი ფორმატში )
class TimeHelper {
    static CREATION_TIME = new Date();
    static formatMilliseconds(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        const displayHours = hours % 24;
        const displayMinutes = minutes % 60;
        const displaySeconds = seconds % 60;

        return `${displayHours} სთ ${displayMinutes} წთ ${displaySeconds} წმ`;
    }
    static getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString();
    }
    static getTimeDifference(date1, date2) {
        const diff = Math.abs(date2 - date1);
        return TimeHelper.formatMilliseconds(diff);
    }
}
console.log("შექმნის დრო:", TimeHelper.CREATION_TIME);
console.log("5000 მილიწამი წაკითხულ დროს ფორმატში:", TimeHelper.formatMilliseconds(5000));
console.log("მიმდინარე დრო:", TimeHelper.getCurrentTime());

const date1 = new Date("2025-02-18T09:00:00");
const date2 = new Date("2025-02-18T18:00:00");
console.log("დროის სხვაობა:", TimeHelper.getTimeDifference(date1, date2));
