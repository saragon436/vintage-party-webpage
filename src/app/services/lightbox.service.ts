import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LightboxState {
  open: boolean;
  img: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private stateSubject = new BehaviorSubject<LightboxState>({ open: false, img: '', alt: '' });
  state$ = this.stateSubject.asObservable();

  open(img: string, alt: string): void {
    this.stateSubject.next({ open: true, img, alt });
  }

  close(): void {
    this.stateSubject.next({ ...this.stateSubject.value, open: false });
  }
}
