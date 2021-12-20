import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsAddModel } from 'src/app/_models/api/comments';
import { HttpClientService } from '../http-client.service';

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    path: string = "comments";

    constructor(private httpClient: HttpClientService) { }

    addComment(data: CommentsAddModel) {
        return this.httpClient.post(`${this.path}`, data);
    }



}