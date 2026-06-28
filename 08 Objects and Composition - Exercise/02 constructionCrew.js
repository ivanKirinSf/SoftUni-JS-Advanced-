function constructionWorker(worker){

    if (worker.dizziness){

        let waterAmount = worker.weight*worker.experience*0.1;

        worker.levelOfHydrated += waterAmount;

        worker.dizziness = false
    }

    return worker

}

