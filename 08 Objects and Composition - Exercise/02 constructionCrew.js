let constructionCrew =
    { weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }


if (constructionCrew.dizziness === true){

let drink = Number(constructionCrew.weight)*0.1*Number(constructionCrew.experience);

constructionCrew.levelOfHydrated += drink;

constructionCrew.dizziness = false;

}

return console.log(constructionCrew)
