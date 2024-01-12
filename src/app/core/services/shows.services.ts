import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ShowsService {
    private http = inject(HttpClient);

    private url = 'https://api.tvmaze.com/shows';

    getShows = () => this.http.get(this.url)

}