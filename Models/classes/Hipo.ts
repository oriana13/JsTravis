import { HippopotamusProps } from "../interfaces/hippo.interface";


export class Hippopotamus implements HippopotamusProps{
    name: string;
    weight: number;
    tusksSize: number;

    constructor(props: HippopotamusProps){
        this.name = props.name;
        this.weight = props.weight;
        this.tusksSize = props.tusksSize;
    }

    swim(): void {
        this.weight -= 0.3;
    }

    eat(): void {
        this.weight += 1.0;
    }

    fight(other: Hippopotamus): Hippopotamus | undefined{
        if(this.tusksSize > other.tusksSize) {
            return this;
        }

        if(other.tusksSize > this.tusksSize) {
            return other;
        }

        if(this.weight >= other.weight * 1.2) {
            return this;
        }

        if(other.weight >= this.weight * 1.2) {
            return other;
        }

        return undefined;
    }

    toString() {
        
        const fields = [];
        fields.push(`name: ${this.name}`);
        fields.push(`weight: ${this.weight}`);
        fields.push(`tusksSize: ${this.tusksSize}`);

        return "{" + fields.join(", ") + "}";
    }

    static lifeCycle(hippo: Hippopotamus) {
        for(let k=0; k<3; k++){
            for(let j=0; j<7; j++){
                for(let i=0; i<15; i++){
                    hippo.swim();
                    hippo.swim();
                    hippo.swim();
                    hippo.eat();
                    hippo.eat();
                }
            }
            console.log("C'est le soir: " + hippo);
        }
    }
}