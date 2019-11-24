
document.querySelector("form").addEventListener("submit", nameGen)

function nameGen (e){
  e.preventDefault()
  let nameTech = document.querySelectorAll(".tech:checked")[0].value;
  let namePlace = document.querySelectorAll(".place:checked")[0].value;
  let nameCall = document.querySelectorAll(".call:checked")[0].value;
  let nameOutfit = document.querySelectorAll(".outfit:checked")[0].value;
  let nameCity = document.querySelectorAll(".city:checked")[0].value
  let techText = document.querySelectorAll(".tech:checked")[0].parentElement.children[1].innerText;
  let placeText = document.querySelectorAll(".place:checked")[0].parentElement.children[1].innerText;
  let callText = document.querySelectorAll(".call:checked")[0].parentElement.children[1].innerText;
  let outfitText = document.querySelectorAll(".outfit:checked")[0].parentElement.children[1].innerText;
  let cityText = document.querySelectorAll(".city:checked")[0].parentElement.children[1].innerText;


  class Choices {
    constructor(tech, place, call, outfit, city){
      this.tech = parseInt(tech),
      this.place = parseInt(place),
      this.call = parseInt(call),
      this.outfit = parseInt(outfit),
      this.city = parseInt(city)
    }
  }
  let newName = new Choices(nameTech, namePlace, nameCall, nameOutfit, nameCity);

  let total = 0;
  Object.values(newName).forEach(num => {
    total = total+num;
  })
  //console.log(checkResult(total))
  document.querySelector("span").textContent = checkResult(total);

  fetch('messages', {
            method: 'post',
            headers: {'Content-Type': 'application/json',
          'Accept': 'application/json'},
            body: JSON.stringify({
              'tech': techText,
              'place': placeText,
              'call': callText,
              'outfit': outfitText,
              'city': cityText,
              'total': checkResult(total)
            })
          })
          .then(response => {
            //if (response.ok) return response.json()
          })
          .then(data => {
            //console.log("works")
            window.location.pathname = '/results'
          })

}

  function checkResult(total){
    if (total === 5){
      return "BBQ Becky"
    }else if(total === 6){
      return "Callbox Christopher"
    }else if(total === 7){
      return "Apartment Patty"
    }else if(total === 8){
      return "Cornerstore Caroline"
    }else if(total === 9){
      return "Baggage Claim Becky"
    }else if(total === 10){
      return "AppleCare Karen"
    }else{
      return "Try Again"
    }
  }
