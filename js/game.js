function space() {
	this.weapon = null;
	this.visited = false;
	this.current = false;
	this.isVisited = function () {
		this.visited = true;
	}
}

function room() {
	space.call(this);
	this.enemy = new enemy();
	this.safe = false;
	this.setEnemy = function (newEnemy) {
		this.enemy = newEnemy;
	}
}

function enemy(name = "goblin", strength = 3, health = 20) {
	this.name = name;
	this.strength = strength;
	this.health = health;
}

function Player(name, weapon) {
  this.name = name;
  this.health = 30;
  this.weapon = new Weapon(weapon);
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