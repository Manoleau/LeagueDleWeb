import { CompetenceChampionModel } from "./competence-champion-model";

export interface ChampionModel {
    key: string,
    nom: string,
    titre: string,
    image: string,
    tags: string[],
    ressource: string,
    compentences?: CompetenceChampionModel[],
    passif?: CompetenceChampionModel
}
