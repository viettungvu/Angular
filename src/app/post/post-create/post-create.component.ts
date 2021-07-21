import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  createForm:FormGroup;
  @Output() newPostEvent=new EventEmitter<Post>();



  constructor() { }

  ngOnInit(): void {
    this.createForm=new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(50),Validators.minLength(10)]),
      description: new FormControl('', Validators.compose([Validators.required]))
    });
  }
  create(post:Post){
    this.newPostEvent.emit(post);
  }

}
