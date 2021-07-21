import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl: string;
  constructor(private _httpClient: HttpClient) {
    this.baseUrl = "https://firstproject-deb86-default-rtdb.firebaseio.com/";
  }
  getPosts(): Observable<Post[]> {
    let enpoint: string = "post.json";
    return this._httpClient.get<Post[]>(this.baseUrl + enpoint)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }
  deletePost(id: string): Observable<any> {
    let endpoint = `post/${id}.json`;
    return this._httpClient.delete(this.baseUrl + endpoint);
  }
  getById(id: string): Observable<Post> {
    let endpoint = `post/${id}.json`;
    return this._httpClient.get<Post>(this.baseUrl + endpoint);
  }
  createPost(post: Post): Observable<{ name: string }> {
    return this._httpClient.post<{ name: string }>(this.baseUrl + "post.json", post);
  }
  updatePost(post: Post) {
    const postData = {
      [post.id as string]: { title: post.title, description: post.description },
    };
    return this._httpClient.patch<Post>(this.baseUrl, postData);
  }
}
