// src/app/services/log.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private apiUrl = 'https://localhost:7241/api/log'; // API base URL

  constructor(private http: HttpClient) { }

  // Method to upload log data to the API
  uploadLog(logLines: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload`, logLines);
  }

  // Method to get parsed log statistics from the API
  getLogStatistics(): Observable<any> {
    return this.http.get(`${this.apiUrl}/statistics`);
  }
}
