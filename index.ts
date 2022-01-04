import { Hippopotamus } from "./Models";

const hippo = new Hippopotamus({
    name: "Babar",
    weight: 1500,
    tusksSize: 35
});

const hippo2 = new Hippopotamus({
    name: "Doria",
    weight: 1800,
    tusksSize: 55
});

const winner = hippo.fight(hippo2);
console.log("Winner = " + winner)

if(winner){
    Hippopotamus.lifeCycle(winner);
    console.log("Le gagnant est : " + winner);
}



