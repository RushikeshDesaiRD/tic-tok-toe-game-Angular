import { Component, Input, OnInit } from '@angular/core';
import { faCircle, faPen, faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {


    @Input() iconName:string;
    faPen=faPen;
    faCircle=faCircle;
    faTimes=faTimes
  constructor() { }

  ngOnInit(): void {
  }

}
