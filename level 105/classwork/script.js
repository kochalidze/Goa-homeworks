//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python

function getDomainName(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?([^\/\?]+)/;
    const matches = url.match(regex);

    if (matches) {
        return matches[1];
    } else {
        return null;
    }
}

console.log(getDomainName("http://github.com/carbonfive/raygun"));
console.log(getDomainName("http://www.zombie-bites.com"));
console.log(getDomainName("https://www.cnet.com")); 