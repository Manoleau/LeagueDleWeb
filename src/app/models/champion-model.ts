import { CompetenceChampionModel } from "./competence-champion-model";

export interface ChampionModel {
    key: string,
    idNom: string,
    nom: string,
    titre: string,
    image: string,
    tags: string[],
    ressource: string,
    find: boolean,
    compentences?: CompetenceChampionModel[],
    passif?: CompetenceChampionModel
}
