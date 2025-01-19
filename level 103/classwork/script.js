// შექმენით პროგრამა რომელიც ღილაკის დაკლიკებაზე ქმნის რენხომ ID-ს, 
// მომხმარებელს ამ ღილაკის გარდა უნდა ქონდეს ინფუთი რომელშიც შეუძლია
//  ჩაწეროს ID და საიტმა უნდა გამოიტანოს ეს ID არსებობს თუ არა “key-ID: value-index”


function func1() {
    return "ID-" + Math.floor(Math.random() * 10000).toString().padStart(4, "0");
}
function func2(id) {
    let idList = JSON.parse(localStorage.getItem("idList")) || [];
    idList.push(id);
    localStorage.setItem("idList", JSON.stringify(idList));
}
function func3() {
    return JSON.parse(localStorage.getItem("idList")) || [];
}
document.getElementById("generateBtn").addEventListener("click", () => {
    const newID = func1();
    func2(newID);
    document.getElementById("output").innerHTML = `<p>Generated ID: ${newID}</p>`;
});
document.getElementById("searchBtn").addEventListener("click", () => {
    const input = document.getElementById("input").value;
    const idList = func3();
    const index = idList.indexOf(input);
  
    if (index !== -1) {
      document.getElementById("output").innerHTML = `<p>Key-ID: ${input} | Value-Index: ${index}</p>`;
    } else {
      document.getElementById("output").innerHTML = `<p>ID "${input}" does not exist.</p>`;
    }
});