function Space() {
	this.weapon = null;
	this.visited = false;
	this.current = false;
	this.isVisited = function () {
		this.visited = true;
	}
}

function Room() {
	Space.call(this);
	this.enemy = new Enemy();
	this.safe = false;
	this.setEnemy = function (newEnemy) {
		this.enemy = newEnemy;
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
class Map{
    constructor(player){
        this.spaces=[[]];
        this.player = player;
        this.currentX = 5;
        this.currentY = 5;
        this.rooms = 0;
        this.complete = 0;
        this.score = 30;

        //fillSpaces method
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
        spaces[x][y].weapon=Weapon.setWeapon('sword');
        //implement checkWeapon here since it can't be called.
        if(x === 2 && y ===2){
            player.weapon = spaces[x][y].weapon;
            spaces[x][y].weapon = null;
            //console.log("you got the sword!!!");
            document.getElementById('weapon').innerText = "You got the sword!!!";
        }
    }
    //don't need getters and setters

    reduceScore(){
        this.score--;
    }

    move(s){
        switch(s){
            case 'w':
                
        }
    }



    


}//end of map class


class Battle {
	constructor(player, enemy) {
		this.player = player;
		this.enemy = enemy;
	}

	attack() {
		const x = Math.round(Math.random());
		if (x) {
			this.enemy.health = this.enemy.health - this.player.weapon.damage;
			console.log(`damage dealt ${this.player.weapon.damage}`)
			console.log(`${this.enemy.name} health is now ${this.enemy.health}`)
		} else {
			console.log(`miss`);
		}
		this.enemyAttack();
	}

	heal() {
		this.player.health += Math.round(Math.random() * 5);
		console.log(`new health of ${this.player.health}`)
		this.enemyAttack();
	}

	enemyAttack() {
		if (this.enemy.health > 0) {
			const x = Math.round(Math.random());
			if (x) {
				this.player.health = this.player.health - this.enemy.strength;
				console.log(`enemy damage dealt ${this.enemy.strength}`)
				console.log(`your health is now ${this.player.health}`)
			} else {
				console.log(`enemy miss`);
			}
		}
	}
}