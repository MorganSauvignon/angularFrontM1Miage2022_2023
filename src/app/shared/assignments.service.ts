import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
    {
      id: 1,
      nom: "TP1 sur WebComponents, un lecteur audio améliorer",
      dateDeRendu: new Date("2022-10-10"),
      rendu: true
    },
    {
      id: 2,
      nom: "TP2 sur Angular, un joli gestionnaire de devoirs",
      dateDeRendu: new Date("2022-11-10"),
      rendu: false
    },
    {
      id: 3,
      nom: "TP3 sur Angular, utilisation du router et de web services",
      dateDeRendu: new Date("2022-12-10"),
      rendu: true
    }

  ]


  constructor (private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id:number): Observable<Assignment | undefined> {
    const a: Assignment | undefined = this.assignments.find(a => a.id == id);
    return of(a);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, "ajouté");

    return of('Assignment ajouté');
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    let pos= this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);

    return of("Assignment Service: assignment supprimé !")
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    // ICI ENVOYER UNE REQuETE PUT DANS UNE BD 
    return of('Assignement Service: assignment modifié !');
  }

  
}
