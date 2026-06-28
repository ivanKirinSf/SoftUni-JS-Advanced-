const worker = {
    weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true 
}

if(worker.dizziness){

    let water = worker.weight*worker.experience*0.1;

    worker.levelOfHydrated += water;

    worker.dizziness = false
}

console.log(worker)

