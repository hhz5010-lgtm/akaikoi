
import React from 'react';

const menu = Array.from({length:40}, (_,i) => ({
  name: `Sushi Rätt ${i+1}`,
  price: `¥${20+i}`,
  desc: `Beskrivning för Sushi Rätt ${i+1}`
}));

function App() {
  return (
    <div style={{maxWidth:'800px', margin:'auto', padding:'20px', fontFamily:'sans-serif'}}>
      <h1 style={{textAlign:'center'}}>🍣 akaikoi Sushi - Göteborg</h1>

      <h2>Meny</h2>
      <ul>
        {menu.map((item,i)=>(
          <li key={i} style={{marginBottom:'10px'}}>
            <strong>{item.name}</strong> - {item.price}<br />
            {item.desc}
          </li>
        ))}
      </ul>

      <h2>Online bokning</h2>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Bokning skickad!')}}>
        <input placeholder='Namn' required style={{margin:'5px'}} />
        <input type='date' required style={{margin:'5px'}} />
        <input type='number' placeholder='Antal personer' required style={{margin:'5px'}} />
        <button type='submit' style={{margin:'5px'}}>Boka bord</button>
      </form>

      <h2>Takeaway / Beställ online</h2>
      <p>Klicka på knappen för att beställa via Qopla:</p>
      <a href="https://www.qopla.se/" target="_blank" rel="noopener noreferrer">
        <button>Beställ via Qopla</button>
      </a>
    </div>
  );
}

export default App;
