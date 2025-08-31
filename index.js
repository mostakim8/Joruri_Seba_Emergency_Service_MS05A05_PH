// navbar responsive 
let menuToggle = document.getElementById("menuToggle");
let mobileMenu = document.getElementById("mobileMenu");
let closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  menuToggle.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuToggle.classList.remove("hidden");
});

// main function start 
let heartCount = 0;
let coins = 100;
let copyCount=0; 

// heart 
  let desktopHeartCountElement = document.getElementById("heart-count");
  let mobileHeartCountElement = document.getElementById("mobile-heart-count");
  let heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    heartCount++;
    desktopHeartCountElement.innerText = heartCount;
    mobileHeartCountElement.innerText = heartCount;
  });
});


// coin 
  let desktopCoinCountElement = document.getElementById("coin-count");
  let mobileCoinCountElement = document.getElementById("mobile-coin-count");

function updateCoinCount() {
  if (desktopCoinCountElement) {
    desktopCoinCountElement.innerText = coins;
  }
  if (mobileCoinCountElement) {
    mobileCoinCountElement.innerText = coins;
  }
}

// copy 
  let copyButtons=document.querySelectorAll(".copy-button")
  let desktopNavCopyCountElement=document.getElementById("nav-copy-count")
  let mobileNavCopyCountElement = document.getElementById("mobile-nav-copy-count");

 copyButtons.forEach(button => {
    button.addEventListener("click", () => {
        let card = button.closest(".card");
        let serviceNumber = card.querySelector(".service-number").innerText;
        
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                copyCount ++; 
                
                desktopNavCopyCountElement.innerText = `(${copyCount})Copy`;
                mobileNavCopyCountElement.innerText = `(${copyCount})Copy`;

                alert(`"${serviceNumber}"Copy Done`);
            })
    });
});

// card 
  let callButtons = document.querySelectorAll(".call-button");

  callButtons.forEach(button => {
    button.addEventListener("click", (event) => {
    event.preventDefault();

    if (coins < 20) {
      alert("You have not enough coin for the call.Your need minimum 20 coins ");
      return;
    }
    coins -= 20;
    updateCoinCount();

      let card = button.closest(".card");
      let serviceName = card.querySelector(".service-name").innerText;
      let serviceNumber = card.querySelector(".service-number").innerText;
// time date     
      let now = new Date();
      let formattedTime = now.toLocaleTimeString('en-BD', {hour: '2-digit', minute: '2-digit' });
      let formattedDate = now.toLocaleDateString('en-BD');

    alert (` ${serviceName}  ${serviceNumber}`);

      let historyItem = document.createElement("div");
       historyItem.classList.add("rounded-box","shadow-sm", "p-4" ,"bg-gray-100","flex", "justify-between", "items-center");

       historyItem.innerHTML = `
      
       <div>
      <p class="font-bold ">${serviceName}</p>
      <p class="text-sm text-gray-500">${serviceNumber}</p>
      </div>

      <p class="text-xs  pl-14 ">${formattedDate}, ${formattedTime}</p>
    `;
       historyItem.classList.add("mb-2");
       historyList.appendChild(historyItem);
  });
});
// clear button 
let clearHistoryButton=document.getElementById("clear-history-button");
let historyList = document.getElementById("history-list");

  clearHistoryButton.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
