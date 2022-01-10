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
