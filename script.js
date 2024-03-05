  //Searchbar
function search() {
    var input = document.getElementById('filter').value.toUpperCase();
    var cards = document.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      var h3 = cards[i].getElementsByTagName('h3')[0];
      if (h3.innerHTML.toUpperCase().indexOf(input) > -1) {
        cards[i].style.display = '';
      } else {
        cards[i].style.display = 'none';
      }
    }
  }

  //FAQ
  function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}