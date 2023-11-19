const cardName= ["Joker","Queen","King"];
const container= document.getElementById("container");
let flipped = false;
let previous;
let current;

for(let i = 0;i<6;i++){
    const card = document.createElement("div");
    cardid = assignCardValue();
    console.log(cardid);
    card.setAttribute("id" ,cardid)
    container.append(card);

    card.addEventListener("dblclick",(event)=>{
        let cardValue = event.target;
        if(flipped == false){
            previous = cardValue;
            card.innerHTML = previous.id;
            flipped = true;
        }
        else{
            current = cardValue;
            if(current.id == previous.id){
                card.innerHTML = current.id;
                setTimeout(()=>{
                    alert("match found");
                },100)
                
            }
            else{
                card.innerHTML = current.id;
            }

            setTimeout(()=>{
                flipped = false;
                previous.innerHTML = "";
                current.innerHTML = "";
                previous = "";
                current = "";                
            },500)
            
        }
    })
}

function assignCardValue(){
    let number = Math.floor(Math.random()*3);
    let cardValue = cardName[number];
    return cardValue;
}

