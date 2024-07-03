// When men and women arrive at this square dance, they enter the dance hall and stand in the line for their gender. As room becomes available on the dance floor, dance partners are chosen by taking the first man and woman in line. The next man and woman move to the front of their respective lines. As dance partners move onto the dance floor, their names are announced. If a couple leaves the floor and there is not both a man and a woman at the front of each line, this fact is announced.

const fs=require("fs").promises;
const filePath="./people.txt";
const Queue=require("./queue");

class Dancer{
    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }
}

const getDancersList=async ()=>{
    try {
        const data=await fs.readFile(filePath,'utf-8');
        const dancersList= data.split('\r\n').map(film => film.trim());
        return dancersList;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const dance=(maleDancers,femaleDancers)=>{
    console.log("The dance partners are:\n");
    while(!maleDancers.empty() && !femaleDancers.empty()){
        const maleDancer=maleDancers.dequeue();
        const femaleDancer=femaleDancers.dequeue();
        console.log(`The female dancer is: ${femaleDancer.name}`);
        console.log(`The male dancer is: ${maleDancer.name}\n`);
    }
    if(maleDancers.count()>0)console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
    if(femaleDancers.count()>0)console.log("There are " + femaleDancers.count() + " male dancers waiting to dance.");
}

async function main(){
    const dancers=await getDancersList();
    const maleDancers=new Queue();
    const femaleDancers=new Queue();
    for(let dancer of dancers){
        const dancerName=dancer.substring(2);
        if(dancer[0]==='M')maleDancers.enqueue(new Dancer(dancerName,'male'));
        else femaleDancers.enqueue(new Dancer(dancerName,'female'))
    }
    dance(maleDancers,femaleDancers);
}
main()