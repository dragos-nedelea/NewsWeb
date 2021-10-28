import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ro&apiKey=9da99a63e37e4cce8d6539475b39306e"


//technewsapiurl
techApiUrl = "https://newsapi.org/v2/top-headlines?country=ro&category=technology&apiKey=9da99a63e37e4cce8d6539475b39306e"

//businessnewsapiurl
businessApiUrl = "https://newsapi.org/v2/top-headlines?country=ro&category=business&apiKey=9da99a63e37e4cce8d6539475b39306e"


//topheading()

topHeading():Observable<any> 
{
  return this._http.get(this.newsApiUrl);
}

//technews()

techNews():Observable<any> 
{
  return this._http.get(this.techApiUrl);
}

//businessnews()

businessNews():Observable<any> 
{
  return this._http.get(this.businessApiUrl);
}

}
