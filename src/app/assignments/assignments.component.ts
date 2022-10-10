import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments, datepicker-overview-example',
  templateUrl: './assignments.component.html', 
  styleUrls: ['./assignments.component.css']

})

export class AssignmentsComponent implements OnInit {
 titre = "Mon application sur les Assignments !"
 
 ajoutActive = false; 
 assignementSelectionne!:Assignment;

 nomDevoir:string="";
 dateDeRendu!:Date;

 formVisible = false;

 ngOnInit(): void{

  }

 
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
 
 onAddAssignmentBtnClick(){
  this.formVisible = true;
 }

 onNouvelAssignment(event: Assignment)
 {
  this.assignments.push(event);
  this.formVisible = false;
 }

  assignments:Assignment[] = [
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date("2022-10-10"),
      rendu: true
    },
    {
      nom: "Devoir NodeJs à rendre",
      dateDeRendu:  new Date("2022-11-10"),
      rendu: false
    },
    {
      nom: "Devoir JAVA à rendre",
      dateDeRendu:  new Date("2022-12-10"),
      rendu: true
    }

  ]

 
 constructor() { }

}
