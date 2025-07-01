import React, { useRef, useState } from "react";

export default function App() {
  let normalVariable = 0;
  const refVariable = useRef(0);
  const [stateVariable, setStateVariable] = useState(0);

  const updateAll = () => {
    normalVariable += 1;
    refVariable.current += 1;
    setStateVariable(prev => prev + 1);
  };

  return (
    <div className="p-8 font-sans space-y-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        ჩვეულებრივი ცვლადი vs useRef vs useState
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          title="ჩვეულებრივი ცვლადი (let/const)"
          desc="რენდერის დროს თავიდან იქმნება. ცვლილება ვერ ინახავს კომპონენტის რერენდერზე."
          value={normalVariable}
        />
        <Card
          title="useRef()"
          desc="ინახავს მნიშვნელობას კომპონენტის რერენდერის გარეშე. current-ს ვუცვლით, მაგრამ UI არ განახლდება."
          value={refVariable.current}
        />
        <Card
          title="useState()"
          desc="როდესაც ვცვლით მნიშვნელობას, რერენდერი ხდება და UI ავტომატურად ახლდება."
          value={stateVariable}
        />
      </div>

      <button
        onClick={updateAll}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-lg transition"
      >
        გაზრდა
      </button>
    </div>
  );
}

function Card({ title, desc, value }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-xl space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-300">{desc}</p>
      <div className="text-2xl font-bold text-yellow-400">ცვლადდი: {value}</div>
    </div>
  );
}
