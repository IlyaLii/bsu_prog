import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../../../services/teacher.service';
import {Teacher} from '../models/teacher.model';


@Component({
  selector: 'app-teacher',
  templateUrl: 'teacher.component.html',
  styleUrls: ['teacher.component.css']
})
export class TeacherComponent {

  public _selectedButton: boolean;


  constructor() { }

}
