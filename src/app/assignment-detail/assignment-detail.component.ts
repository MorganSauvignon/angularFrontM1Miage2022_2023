import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  // @Input() 
  assignementTransmis!: Assignment | undefined;

  constructor(private assignmentsService: AssignmentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAssignment();
  }

  getAssignment() {

    const id = this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id).subscribe(assignment => this.assignementTransmis = assignment);

  }


  onAssignementRendu() {
if(!this.assignementTransmis) return;

    this.assignementTransmis.rendu = true ;

    
    this.assignmentsService.updateAssignment(this.assignementTransmis).subscribe(message => console.log(message));
    
  }

  onDelete() {

    if(!this.assignementTransmis) return;

    this.assignmentsService.deleteAssignment(this.assignementTransmis).subscribe((message) => console.log(message));

    this.assignementTransmis != null;
  }

}
