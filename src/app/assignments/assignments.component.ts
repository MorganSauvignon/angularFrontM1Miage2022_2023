import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
 titre = "Mon application sur les Assignments !"
 
 assignments: any = [{
  rendu: false,
  nom: "francais",
  dateDeRendu: "lundi 12"
},
{
  rendu: true,
  nom: "anglais",
  dateDeRendu: "lundi 120"
},
{
  rendu: true,
  nom: "géo",
  dateDeRendu: "lundi 2"
}]
 
 constructor() { }

  ngOnInit(): void {
  }

}
