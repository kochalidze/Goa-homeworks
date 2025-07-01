// 3) ააწყეთ საიტი სადაც გექნებათ Profile card-ი.
// 4) საიტზე უნდა გამოიყენოთ prop-სები, რომ შვილი კომპონენტიდან გადაიტანოთ ინფორმაცია მშობელ კომპონენტში.
// 5) საიტზე შვილი კომპონენტიდან უნდა გადაიტანოთ ინფორმაცია (სახელი, გვარი, ფოტო და აღწერა) მშობელ კომპონენტში და შემდეგ ლამაზად დააბრუნოთ.

import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <h1 className="h111">Profile Card</h1>
      <Main name="Giga Kochalidze"
      descrip='Hello, I am Giga Kochalidze, a 14-year-old, I from Georgia. I am  programmer'
      imgUrl='https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-1/459037090_122173415306216801_1200052809302886044_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFv475rRpGvz0112-AhK6maNXbYSp7AP7c1dthKnsA_txl9ZFOg0nCYWtbaUg0yej1ghEjRlPkJBY-N9kTjlYUi&_nc_ohc=v7nlHrujPPAQ7kNvwEsdWSo&_nc_oc=AdkMqUCwbIRx-rL2F_-o1-svvIM5_wPCpbyXOPLjdoBMFiCIJ_c6v3L5myLzz1YAGnTA6hCDG_-iSQYq27XzA_Uh&_nc_zt=24&_nc_ht=scontent.fkut1-1.fna&_nc_gid=tdrUcys7diIdjYj7f_oS-w&oh=00_AfIPv-algT0eD2pVYLAUp6dhv_NKpCZtgv8bHMqmKF9jkg&oe=6836613C'
      />
    </div>
  )
}

export default App
