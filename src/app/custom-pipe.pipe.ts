import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result = "";
    console.log(value.substr(10, value.length-11))
    let json = JSON.parse(value.substr(10, value.length-11))
    result = json.nom + " " + json.prenom + " agé de " + json.age + " ans, né le " + json.ddn + " à un temps de jeu de " + json.tempsJeu +" mins et a marqué " + json.nbBut + " buts"
    if(json.clubs.length == 0){
      result = result + " et n'a pas encore joué dans un club de ligue 1."
    }
    else if(json.clubs.length == 1){
      result = result + " et à joué dans le club : " + this.IsALigue1Club(json.clubs[0].club)
    }
    else{
      result = result + " les clubs sont ";
      for (let i = 0; i < json.clubs.length; i++) {
        if(i ==json.clubs.length-1) {
          result = result + " et " + this.IsALigue1Club(json.clubs[i].club) + ".";
        }
        else if(i ==json.clubs.length-2) {
          result = result + this.IsALigue1Club(json.clubs[i].club);
        }
        else{
          result = result + this.IsALigue1Club(json.clubs[i].club) + ", ";
        }
      }

    }
    return result;
  }

  IsALigue1Club(temp : string): string{
    let clubsLigue1 = ["psg", "angers","bordeaux","om", "asse", "mhsc", "reims", "nantes", "ol", "lille", "brest","rennes","strasbourg","monaco","nice","amiens","dijon","metz","toulouse","nimes"]
    console.log("club " + temp)
    console.log(clubsLigue1.indexOf(temp))
    if(temp != "" && temp != null && temp!= " "){
      if(clubsLigue1.indexOf(temp.toLowerCase()) !==-1){
        return temp;
      }
      else{
        return "aucun club de ligue 1.";
      }
    }
    else{
      return "aucun club de ligue 1.";
    }
  }

}
