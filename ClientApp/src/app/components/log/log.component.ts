// src/app/components/log/log.component.ts
import { Component } from '@angular/core';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent {
  logInput: string = '';
  logResults: any = null;

  constructor(private logService: LogService) { }

  // Handle log data upload
  uploadLog(): void {
    const logLines = this.logInput.split('\n').map(line => line.trim());
    this.logService.uploadLog(logLines).subscribe({
      next: (response) => {
        this.logResults = response;
      },
      error: (err) => {
        console.error('Failed to upload logs:', err);
      },
    });
  }
}
