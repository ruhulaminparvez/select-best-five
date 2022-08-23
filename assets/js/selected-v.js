const cart = [];
// products-cart

function displayPlayers()
{
    let totalPrice = 0;
    const totalPlayers = document.getElementById("total-players");
    totalPlayers.innerText = cart.length;

    const cartContainer = document.getElementById("players-cart");
    cartContainer.textContent = '';

    for(let i = 0; i < cart.length; i++)
    {
        if(cart.length <= 5) {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${cart[i].playersName}</td>
            `;
            cartContainer.appendChild(tr);
        } else {
            alert("You can't add more than 5 players! Please, Refresh the page and try again!");
        }
    }

    

    cartContainer.appendChild(tr);
}

function addPlayers(element) {
    const playersName = element.parentNode.children[1].innerText;

    const players = {
        playersName: playersName,
    }

    cart.push(players);

    displayPlayers();
}


//Btn Display Players
function btnDisabled(btnId){
    const btn = document.getElementById(btnId);
    btn.addEventListener("click", function() {
        btn.setAttribute("disabled", true);
        btn.style.backgroundColor = "grey";
    });
}

btnDisabled("select-1");
btnDisabled("select-2");
btnDisabled("select-3");
btnDisabled("select-4");
btnDisabled("select-5");
btnDisabled("select-6");
btnDisabled("select-7");
btnDisabled("select-8");
btnDisabled("select-9");