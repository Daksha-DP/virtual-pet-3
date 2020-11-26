class Food {
constructor() {

    this.image= loadImage("images/Milk.png");

    this.foodStock= 0;
    this.lastFed=null;
    }

    getFoodStock() {
        this.foodStock=foodStock;
    }

    updateFoodStock() {
        this.foodStock+=1;
    }

    deductFood() {
        this.foodStock= this.foodStock-1;
    }

    // washroom,bedroom....
    washroom() {
        background(washroom,550,500);
    }

    bedroom() {
        background(bedroom,550,500);
    }

    garden() {
        background(garden,550,500);
    }

    // display function
    display() {
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0) {
        for(var i=0; i<this.foodStock; i++) {
            if(i%10==0) {
                x=80;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
            }
        }
    }
}