class Person {
  constructor(name, damageStrength, health) {
    this.name = name;
    this.damage = damageStrength;
    this.health = health;
    this.massage = document.querySelector(`.${this.name}-massage`);
    this.Person = document.querySelector(`.${this.name}`);
    this.attackBtn = document.querySelector(`.${this.name}-attack`);
    this.reHealthBtn = document.querySelector(`.${this.name}-rehealth`);
    this.progress = document.querySelector(`.${this.name}-health span`);
  }
  attack(opponent) {
    opponent.health -= this.damage;
    opponent.progress.style.width = `${opponent.health}%`;
    if (opponent.health <= 50) {
      opponent.Person.classList.add("yellow");
    }
    if (opponent.health <= 20) {
      opponent.Person.classList.add("red");
    }
    if (opponent.health === 0) {
      this.massage.innerHTML = "You Are Win";
      opponent.massage.innerHTML = "You Are Died";
      this.attackBtn.classList.add("end");
      this.reHealthBtn.classList.add("end");
      opponent.attackBtn.classList.add("end");
      opponent.reHealthBtn.classList.add("end");
    }
    if (this.health === 0) {
      opponent.massage.innerHTML = "You Are Win";
      this.massage.innerHTML = "You Are Died";
      opponent.attackBtn.classList.add("end");
      opponent.reHealthBtn.classList.add("end");
      this.attackBtn.classList.add("end");
      this.reHealthBtn.classList.add("end");
    }
  }
  reHealth() {
    if (this.health < 100) {
      this.progress.style.width = `${(this.health += 10)}%`;
      if (this.health >= 50) {
        this.Person.classList.remove("yellow");
        l;
      }
      if (this.health >= 20) {
        this.Person.classList.remove("red");
      }
    }
    if (this.health > 100) {
      this.progress.style.width = `${this.health}%`;
    }
  }
  status() {
    this.name;
    this.damage;
    console.log(this.health);
  }
}

const naruto = new Person("naruto", 10, 100);
const sasuke = new Person("sasuke", 10, 100);

naruto.attackBtn.addEventListener("click", () => {
  naruto.attack(sasuke);
});

naruto.reHealthBtn.addEventListener("click", () => {
  naruto.reHealth();
});

sasuke.attackBtn.addEventListener("click", () => {
  sasuke.attack(naruto);
});

sasuke.reHealthBtn.addEventListener("click", () => {
  sasuke.reHealth();
});

// start the game
document.querySelector(".new-game").addEventListener("click", () => {
  window.location.reload();
});
