import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messageSubject = new BehaviorSubject<string | null>(null);
  message$ = this.messageSubject.asObservable();

  private timer: ReturnType<typeof setTimeout> | null = null;

  show(message: string, durationMs = 2200): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.messageSubject.next(message);
    this.timer = setTimeout(() => this.messageSubject.next(null), durationMs);
  }
}
