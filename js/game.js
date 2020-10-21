function Space() {
	this.weapon = null;
	this.visited = false;
	this.current = false;
	this.isVisited = function () {
		this.visited = true;
    }
    this.toString = function(){
        if(this.current){
            return "P";
        } else if(this.visited){
            return "O";
        } else{
            return "X";
        }
    }
}

function Room() {
	Space.call(this);
	this.enemy = new Enemy();
	this.safe = false;
	this.setEnemy = function (newEnemy) {
		this.enemy = newEnemy;
    }
    this.toString = function(){
        if(this.prototype.visited){
            return "S";
        } else if(this.prototype.current){
            return "P";
        }else{
            return "R";
        }
    }
}

function Enemy(name = "goblin", strength = 3, health = 20) {
	this.name = name;
	this.strength = strength;
	this.health = health;
}

function Player(name) {
  this.name = name;
  this.health = 30;
  this.weapon = new Weapon();
}

function Weapon(name) {
  if (name == "sword") {
    this.name = "sword";
    this.damage = 5;
  } else {
    this.name = "fist";
    this.damage = 1;
  }
}

let rooms = 0;
let complete = 0;
let score = 30;
let currentX = 5;
let currentY = 5;
let spaces = [[]];

function fillSpaces(){
    const x = Math.floor(Math.random()*5);
    const y = Math.floor(Math.random()*5);
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(((i===0 || i===4) && j===2)|| (i===2 && (j===0||j===4))){
                spaces[i][j] = new Room();
                this.rooms++;
            } else{
                spaces[i][j] = new Space(); 
            }
            
        }//end of inner for loop
    }//end of outer for loop
    spaces[2][2].setCurrent = true;
    this.currentX = 2;
    this.currentY =2;
    spaces[y][x].weapon= new Weapon('sword');
}
function Map(){

    this.reduceScore = function(){
        this.score--;
    };

    //don't need getters and setters


    this.move(s)= function(s){
        switch(s){
            case 'w':
                this.up();
                break;
            case 's':
                this.down();
                break;
            case 'a':
                this.left();
                break;
            case 'd':
                this.right();
                break;
            default:
                break;
        }  
    }

    this.up= function(){
        if(this.currentY >0){
            spaces[currentY][currentX].current = false;
            spaces[currentY][currentX].visited = true;
            spaces[--currentY][currentX].current = true;
        }
    }

    this.down= function(){
        if(this.currentY < 4){
            spaces[currentY][currentX].current = false;
            spaces[currentY][currentX].visited = true;
            spaces[++currentY][currentX].current = true;
        }
    }

    this.left= function(){
        if(this.currentX < 4){
            spaces[currentY][currentX].current = false;
            spaces[currentY][currentX].visited = true;
            spaces[currentY][++currentX].current = true;
        }
    }

    this.right=function (){
        if(this.currentY > 0){
            spaces[currentY][currentX].current = false;
            spaces[currentY][currentX].visited = true;
            spaces[currentY][--currentX].current = true;
        }
    }

    this.checkWeapon=function (){
        if(spaces[currentY][currentX].weapon != null){
            player.weapon = spaces[currentY][currentX].weapon;
            spaces[currentY][currentX].weapon = null;
            //console.log("you got the sword!!!");
            document.getElementById('Message').innerText = "You got the sword!!!";
        }
    }

    this.consequences= function(){
        this.checkWeapon();
        if(spaces[currentY][currentX] instanceof Room){
			enemy = spaces[currentY][currentX].enemy;
            battle();
            spaces[currentY][currentX].enemy = null;
            this.complete++;
            this.win();
        }
    }

    this.win= function(){
        if(this.complete === this.rooms){
            //you win
            document.getElementById('Message').innerText = "You win!!! You got a score of ${this.score)!";
            
            //system exit
        }
    }


}//end of map function

let player = null;

function createPlayer(name) {
	player = new Player(name);
}

let enemy = null;

function battle() {
	document.getElementById('attack').addEventListener('click', attack);
	document.getElementById('heal').addEventListener('click', heal);
	while (player.health > 0 && enemy.health > 0) {
		setTimeout(0);
	}
	console.log("done")
}

function attack() {
	const x = Math.round(Math.random());
	if (x) {
		enemy.health = enemy.health - player.weapon.damage;
		console.log(`damage dealt ${player.weapon.damage}`)
		console.log(`${enemy.name} health is now ${enemy.health}`)
	} else {
		console.log(`miss`);
	}
	enemyAttack();
}

function heal() {
	player.health += Math.round(Math.random() * 5);
	console.log(`new health of ${player.health}`)
	enemyAttack();
}

function enemyAttack() {
	if (enemy.health > 0) {
		const x = Math.round(Math.random());
		if (x) {
			player.health = player.health - enemy.strength;
			console.log(`enemy damage dealt ${enemy.strength}`)
			console.log(`your health is now ${player.health}`)
			if (player.health <= 0) {}
		} else {
			console.log(`enemy miss`);
			battle();
		}
	} else {
		console.log('enemy dead');
	}
}