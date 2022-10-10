import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomDevoir: string = "";
  dateDeRendu!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignmemt = new Assignment();
    newAssignmemt.nom = this.nomDevoir;
    newAssignmemt.dateDeRendu = this.dateDeRendu;
    newAssignmemt.rendu = false;

    this.nouvelAssignment.emit(newAssignmemt);
  }



}
