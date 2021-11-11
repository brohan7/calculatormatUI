import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calciui';
  counter_one = 0;
   counter_two = 0;
  
  incrementby1one()
{
   this.counter_one +=1;
   }
   incrementby1two()
   {
   this.counter_two +=1;
   }
   incrementby2one()
   {
   this.counter_one +=2;
   }
   incrementby2two()
   {
   this.counter_two +=2;
   }
   incrementby3one()
   {
   this.counter_one +=3;
   }
   incrementby3two()
   {
   this.counter_two +=3;
   }
   incrementby4one()
   {
   this.counter_one +=4;
   }
   incrementby4two()
   {
   this.counter_two +=4;
   }
   incrementby5one()
   {
   this.counter_one +=5;
   }
   incrementby5two()
   {
   this.counter_two +=5;
   }
   incrementby6one()
   {
   this.counter_one +=6;
   }
   incrementby6two()
   {
   this.counter_two +=6;
   }
   incrementby7one()
   {
   this.counter_one +=7;
   }
   incrementby7two()
   {
   this.counter_two +=7;
   }
   incrementby8one()
   {
   this.counter_one +=8;
   }
   incrementby8two()
   {
   this.counter_two +=8;
   }
   incrementby9one()
   {
   this.counter_one +=9;
   }
   incrementby9two()
   {
   this.counter_two +=9;
   }
   incrementby0one()
   {
   this.counter_one +=0;
   }
   incrementby0two()
   {
   this.counter_two +=0;
   }
   Add()
   {
   alert( this.counter_one+this.counter_two);
   this.counter_one=0;
   this.counter_two=0;
   }
   Subt()
   {
   alert(this.counter_one-this.counter_two);
   this.counter_one=0;
   this.counter_two=0;
   }
   Prod()
   {
   alert(this.counter_one*this.counter_two);
   this.counter_one=0;
   this.counter_two=0;
   }
   Div()
   {
   alert(this.counter_one/this.counter_two);
   this.counter_one=0;
   this.counter_two=0;
   }
   Fact(){
   var a=1;
   if(this.counter_one==0)
   {
   alert(1)
   }
   else
   {
   while(this.counter_one!=1)
   {
   a=a*this.counter_one;
   this.counter_one -=1;
   }
   alert(a);
   this.counter_one -=1;
   }
   }
   Prime()
   { var flag;
   for(let i=2;i<=this.counter_one/2;i++)
   {
   if(this.counter_one%i==0)
   {
   flag=0;
   }
   else{
   flag=1;
   }
   }
   if(flag==0)
   {
   alert("THE NUMBER IS PRIME")
   }
   else{
   alert("THE NUMBER IS COMPOSITE")
   }
   this.counter_one=0;
   }
}
