import { Component, OnInit, /*EventEmitter, Output*/ } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  // @Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomDevoir: string = "";
  dateDeRendu!: Date;

  constructor (private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignmemt = new Assignment();
    newAssignmemt.nom = this.nomDevoir;
    newAssignmemt.dateDeRendu = this.dateDeRendu;
    newAssignmemt.rendu = false;

    // this.nouvelAssignment.emit(newAssignmemt);

    this.assignmentsService.addAssignment(newAssignmemt).subscribe(message => console.log(message));

  }



}
