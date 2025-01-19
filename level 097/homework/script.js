const emails = [
  { subject: "მოგზაურობა", content: "ნუ დაგავიწყდებათ თქვენი ბილეთები", receivedDate: "2024-12-15" },
  { subject: "მოხსენება", content: "გთხოვთ, წაიკითხოთ ბოლო ანგარიში", receivedDate: "2024-12-12" },
  { subject: "მოგზაურობა", content: "ძალიან კარგი შეთავაზება მაქვს", receivedDate: "2024-12-13" },
  { subject: "გაცნობიერება", content: "შესაძლებელია მცირე შეცდომები", receivedDate: "2024-12-10" }
];

const select = document.getElementById('select1');
const button =  document.getElementById('btn');
const list = document.getElementById('list');

function func() {
  const selected = select.value;
  list.innerHTML = '';

  if (!selectedSubject) {
    alert("გთხოვთ, აირჩიოთ თემა");
    return;
  }

  for (const i of emails) {
    if (i.subject === selected) {
      const li = document.createElement('li');
      li.textContent = `${i.subject}: ${i.content} (${i.receivedDate})`;
      list.appendChild(li);
    }
  }
}

booleanToString.addEventListener("click", func);