import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Observable } from 'rxjs';

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

 assignments!:Assignment[];

 constructor (private AssignmentService:AssignmentsService){}

 ngOnInit(): void{
    this.getAssignments();
  }

  getAssignments(){
    this.AssignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }



 
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
 
//  onAddAssignmentBtnClick(){
  // this.formVisible = true;
//  }

//  onNouvelAssignment(event: Assignment)
//  {
//   // this.assignments.push(event);
//   this.AssignmentService.addAssignment(event).subscribe(message => console.log(message));
//   // this.formVisible = false;
//  }


}
