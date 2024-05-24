import { useState } from "react";
import ExpendableText from "./components/ExpendableText";

function App() {
  return (
    <div>
      <ExpendableText maxChars={100}>
        Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa
        gentis num é. Leite de capivaris, leite de mula manquis sem cabeça. Pra
        lá, depois divoltis porris, paradis. Em pé sem cair, deitado sem dormir,
        sentado sem cochilar e fazendo pose. Paisis, filhis, espiritis santis.
        Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
        fermentis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua
        vidis. In elementis mé pra quem é amistosis quis leo.
      </ExpendableText>
    </div>
  );
}

export default App;
