anonymousCreated = []



const customButton = document.getElementById("custom-button")
const anonymousButton = document.getElementById("anonymous-button")
const usernameInput = document.getElementById("username")
const enterButton = document.getElementById("enter")
const factDiv = document.getElementById("fact-store")
const viewFacts = document.getElementById('factfile-button')

usernameInput.style.display = "none";


customButton.addEventListener("click", () => {
    usernameInput.style.display = "block";
});

anonymousButton.addEventListener("click", () => {
    let anonymousValue = Math.floor(Math.random() * 10000);
    for (let number in anonymousCreated) {
        if (number != anonymousValue) {
            username.innerHTML = `user${anonymousValue}`
        }
    }

});



enterButton.addEventListener("click", () => {
    const nickname = document.getElementById("username")
    const userInput = document.getElementById('text')

    fetch('/messages', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nickname, userInput })
    })
        .then(res => res.json())
        .then(data => {
            alert("submitted")
        })
        .catch(err => {
            console.error("unable to submit:", err)
        });
});

function loadMessages() {
    viewFacts.addEventListener("click", () => {
        fetch('/messages', {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            data.messages.forEach(entry => {
                let messageLine = document.createElement('p')
                let nickname = entry.nickname
                messageLine.textContent = `${nickname}: ${entry.message}`;
                factDiv.appendChild(messageLine);


            })
        })
        
    })
}
  

