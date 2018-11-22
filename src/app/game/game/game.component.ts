import {Renderer2, Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { timer } from 'rxjs';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements AfterViewInit {
userScore = 0;
computerScore = 0;
total=10;
@ViewChild('compscore') computerScore_span: ElementRef;
@ViewChild('userscore') userScore_span: ElementRef;
result_div = 'let the game begin';
@ViewChild('r') rock_div: ElementRef;
@ViewChild('p') paper_div: ElementRef;
@ViewChild('s') scissors_div: ElementRef;
username = localStorage.getItem('username');
// Dom Cached
show;


  constructor(public render: Renderer2, public r: Router) {

    this.show = false;
  }

ngAfterViewInit() {

  this.main();



}

main() {

    this.render.listen(this.rock_div.nativeElement, 'click', () => {
      this.game('r');
      });
      this.render.listen(this.paper_div.nativeElement, 'click', () => {
        this.game('p');
      });
      this.render.listen(this.scissors_div.nativeElement, 'click', () => {
        this.game('s');
      });


}

game(choice: string) {
const computerChoice = this.computerChoice();
switch (choice + computerChoice) {
case 'rs':
case 'pr':
case 'sp':
this.win(choice, computerChoice);
  break;
case 'rp':
case 'ps':
case 'sr':
this.loss(choice, computerChoice);
  break;
case 'rr':
case 'ss':
case 'pp':
  this.draw();
  break;

}
}
computerChoice() {
const cc = ['r', 'p', 'c'];
const rand = (Math as any).floor((Math as any).random() * 3);
return cc[rand];
}
convert(s) {
  if (s === 'r') {return 'Rock'; }
  if (s === 'p') {return 'Paper'; }
  return 'Scissors';
}
win(u, s) {
  this.show = true;
  this.result_div = `${this.convert(u)}  beats ${this.convert(s)}  . You win 🔥🔥 !`;
this.userScore++;
this.total++;

timer(1000).subscribe(() => this.show = false) ;

}
loss(u, s) {
  this.show = true;
  this.result_div = `${this.convert(u)}  beats ${this.convert(s)}  . You loss 😞!`;
  this.computerScore++;
  this.total++;

  timer(1000).subscribe(() => this.show = false) ;

}
draw() {
  this.show = true;
  this.result_div = `You draw 😳 `;
  timer(1000).subscribe(() => this.show = false) ;
}
rest() {
  localStorage.clear();
  this.r.navigateByUrl('');

}
}
