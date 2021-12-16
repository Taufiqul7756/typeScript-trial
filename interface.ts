interface player {
  club: string;
  name: string;
  salary: number;
  wife: string;
  isPlaying: boolean;
}

const neymar: player = {
  name: "Neymar",
  club: "PSG",
  salary: 450000,
  wife: "Neymars gf",
  isPlaying: true,
};

const messi: player = {
  name: "Messi",
  club: "PSG",
  salary: 450000,
  wife: "Messi's gf",
  isPlaying: true,
};

function getBonus(player: player, friends: string[]) {
  return player.salary * 0.1;
}

const poorPlayer = { age: 34, salary: 1200000 };
const result = getBonus(messi, ["sam", "tam"]);
console.log(result);
