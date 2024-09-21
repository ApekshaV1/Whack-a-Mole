let currMoleTile;
let currPlantTile;
let Score=0;
let gameOver=false;

window.onload = function(){
    setGame();

}
 
function setGame() {
    //set up the grid for the game board in html
    for(let i=0;i<9;i++) //i goes from 0 to 8, stops at 9
    {
        //<div id="0-8"></div>
        let tile= document.createElement("div");
        tile.id= i.toString();
        tile.addEventListener("click", selecttile);  //if the tile get clicks then itb will call the function select tile
        document.getElementById("Board").appendChild(tile);

    }

    setInterval(setMole,2000); //1000 milliseconds = 1 seconds
    setInterval(setPlant,3000); //2000 milliseconds = 2 seconds
}

function getRandomTile(){
    //math.random-->(0-1*9=(0-9)-->round down to (0-8) integers)
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){

    if(gameOver)
        {
            return;   //if game over the should not be allowed to select
        }

    if(currMoleTile)
        {
            currMoleTile.innerHTML ="";
        }
    let mole=document.createElement("img");
    mole.src="./shonty mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id==num)  //to check if mole and plant are on the same tile
        {
        return;
    }


    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){

    if(gameOver){
        return;  //if game over the should not be allowed to select
    }
    if(currPlantTile){
        currPlantTile.innerHTML ="";
    }
    let plant=document.createElement("img");
    plant.src="./piranha plant.webp";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id==num)  //to check if mole and plant are on the same tile
    {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selecttile(){
    if(gameOver){
        return; //if game over the player would not be allowed to click any tile
    }
    if(this ==currMoleTile){
        Score +=10;
        document.getElementById("Score").innerText = Score.toString(); //update score
       
    }
    else if(this== currPlantTile){
        document.getElementById("Score").innerText = "GAME OVER:" + Score.toString();
        gameOver=true;
    }
}
    
