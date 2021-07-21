import { AuthService } from './../authenticate/auth.service';
import { PostService } from './post.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[]=[];
  post:Post;
  constructor(private _postService: PostService, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.authenticate("viettungtvhd@gmail.com", "viettungtvhd@123").subscribe(
      (res)=>{localStorage.setItem('token', JSON.stringify(res))}
    )
    this._postService.getPosts().subscribe(
      (res)=>{this.posts=res}
      )
    }
    delete(id:string){
      this._postService.deletePost(id).subscribe(
        ()=>{alert("Deleted")},
        (err)=>{alert("Failed")}
      )
    }
    getById(id:string){
      this._postService.getById(id).subscribe(
        (res)=>{this.post=res}
      )
    }
    create(newpost:Post){      
      this._postService.createPost(newpost).subscribe(
          (res)=>{
            alert("added successfull");
          }
      );
    }
    update(post:Post){
      this._postService.updatePost(post).subscribe(
        ()=>{alert("Updated successful")}
      )
    }
}
