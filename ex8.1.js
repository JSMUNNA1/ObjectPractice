function MyClock(){
       this.date=new Date();
       this.hours=this.date.getHours();
       this.minutes=this.date.getMinutes();
       this.sec=this.date.getSeconds();
}
MyClock.prototype.run=function(){
      setInterval(this.update.bind(this),1000)
}

MyClock.prototype.update=function(){
      this.setUpdate(1);
      console.log(this.hours,":",this.minutes,":",this.sec);
      
}

MyClock.prototype.setUpdate=function(sec){
      this.sec+=sec;
      if(this.sec>=60){
         this.sec=0;
         this.minutes+=1
      }
      if(this.minutes>=60){
           this.minutes=0;
           this.hours+=1;
      }
      if(this.hours>=24){
          this.hours=0;
          
      }
}
const clock=new MyClock();
clock.run()