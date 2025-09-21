import { Component, Input, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div >
      <div style="display: flex;  border-radius: 20px; height: fit-content;">
        <div style="display: flex; height ">
            <p style="background-color: #2B2D37; color: white; padding:0 0.5rem ">{{ timeLeft().days }}d</p>
        <p style="background-color: #2B2D37; color: #ffc107; padding:0 0.5rem"> :{{ timeLeft().hours }}h</p>
        </div>
        <div style="display: flex;  ">
           <p style="background-color: #ffc107; color: white; padding:0 0.5rem">:{{ timeLeft().minutes }}m </p>
        <p style="background-color: #ffc107; color: #2B2D37; padding:0 0.5rem">  :{{ timeLeft().seconds }}s</p>
        </div>
      
       
        
        
        
       
      </div>
    </div>
  `
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() targetDate!: string; // e.g. "2025-12-31T23:59:59"

  timeLeft = signal({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  private timerId: any;

  ngOnInit() {
    this.updateTimeLeft();
    this.timerId = setInterval(() => this.updateTimeLeft(), 1000);
  }

  ngOnDestroy() {
    if (this.timerId) clearInterval(this.timerId);
  }

  private updateTimeLeft() {
    const now = new Date().getTime();
    const target = new Date(this.targetDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.timeLeft.set({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(this.timerId);
      return;
    }

    this.timeLeft.set({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    });
  }
}
