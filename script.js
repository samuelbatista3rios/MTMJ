// Definindo as cartas
const cards = [
  { name: "Carta 1", attribute1: 10, attribute2: 7, attribute3: 6, attribute4: 5 },
  { name: "Carta 2", attribute1: 7, attribute2: 8, attribute3: 9, attribute4: 10 },
  { name: "Carta 3", attribute1: 8, attribute2: 6, attribute3: 10, attribute4: 9 }
];

// Exibir as cartas
const displayCards = () => {
  const cardsDiv = document.getElementById('cards');
  cardsDiv.innerHTML = '';
  cards.forEach((card, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'box';
      cardDiv.innerHTML = ` 
                          <h3>${card.name}</h3>
                          <p>1. Ataque: ${card.attribute1}</p>
                          <p>2. Defesa: ${card.attribute2}</p>
                          <p>3. Magia: ${card.attribute3}</p>
                          <p>4. Estamina: ${card.attribute4}</p>
                          </>
                          ` ;
      cardDiv.setAttribute('id', `card${index}`);
      cardDiv.setAttribute('class', 'card');
      cardDiv.addEventListener('click', () => selectAttribute(index));
      cardsDiv.appendChild(cardDiv);
  });
};

// Selecionar os atributos para comparar
const selectAttribute = (index) => {
  const attribute = prompt("Escolha o atributo.(1-4) :");
  if (attribute >= 1 && attribute <= 4) {
      compareCards(index, `attribute${attribute}`);
  } else {
      alert("Numero do Atributo Invalido!");
  }
};

// Comparar atributos das cartas
const compareCards = (index, attribute) => {
  const playerCard = cards[index];
  
  // Escolher aleatoriamente uma carta diferente da carta do jogador
  let opponentIndex = index;
  while (opponentIndex === index) {
      opponentIndex = Math.floor(Math.random() * cards.length);
  }
  
  const opponentCard = cards[opponentIndex];
  const playerValue = playerCard[attribute];
  const opponentValue = opponentCard[attribute];
  let resultMessage;

  if (playerValue > opponentValue) {
      resultMessage = `
      Você ganhou! Você ${playerCard.name} com atributo (${playerValue}), venceu a carta do oponente ${opponentCard.name} com atributo (${opponentValue}).`;
  } else if (playerValue < opponentValue) {
      resultMessage = `Você Perdeu! Você ${playerCard.name} com atributo (${playerValue}), perdeu para o oponente ${opponentCard.name} com atributo (${opponentValue}).`;
  } else {
      resultMessage = `Empate! Você ${playerCard.name} com atributo (${playerValue}), empatou com a carta do oponente ${opponentCard.name} com atributo (${opponentValue}).`;
  }

  window.alert(resultMessage);
};


// executar a função
displayCards();
