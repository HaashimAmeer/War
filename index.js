let deckID;

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckID = data.deck_id;
      console.log(data);
      console.log(deckID);
    });
}

document.getElementById("new-deck").addEventListener("click", handleClick);

function drawCards() {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.cards.length; i++) {
        console.log(
          `Card #${i + 1}: ${data.cards[i].value} of ${data.cards[i].suit}`
        );
        document.getElementById(
          "cards"
        ).innerHTML += `<img src = "${data.cards[i].images.png}"> </img>`;
      }
      console.log(data);
    });
}

document.getElementById("draw-cards").addEventListener("click", drawCards);
