class Rabbit {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  jump() {
    let distance = Math.floor(Math.random() * 10) + 1;
    this.position += distance;
    console.log(`${this.name} 跳了 ${distance} 米，当前位置: ${this.position} 米`);
  }
}

const rabbit = new Rabbit("小兔子");

// 使兔子跳跃
rabbit.jump();
