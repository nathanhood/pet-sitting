/* global calculateDamage, getImage, animalId, pets */
/* jshint unused: false */
/* exported Pet */
/* global _ */



class Pet{
  constructor(species, speciesImg, gender, age=3, name='Unknown'){
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 2;
    this.name = name;

    this.health = _.random(10, 100);
    this.full = _.random(10, 100);
    this.mood = _.random(10, 100);
  }

  static find(name){ //static is keyword for creating a class method
    return _(pets).find(p=>p.name === name); //_.find can take function. searching for name.
  }

  eat(){
    this.full += _.random(3, 8); //increasing property full of 'this' by between 3-8px
    if(this.full >= 100){this.full = 100;} //limiting max amount to 100
    this.health += _.random(-5, 0);
    if(this.health <= 0){
      $(`div[data-name=${this.name}]`).find('.photo').css({'background-image': 'url("../media/skull.png")', 'background-size': 'cover'});
    }
  }

  sleep(){
    this.health += _.random(2, 6);
    if(this.health >= 100){this.health = 100;}

    this.mood += _.random(-2,2);
    if(this.mood >= 100){this.mood = 100;}
  }

  play(){
    this.mood += _.random(-5,3);
    if(this.mood >= 100){this.mood = 100;}

    this.health += _.random(-2, 5);
    if(this.health <= 0){
      $(`div[data-name=${this.name}]`).find('.photo').css({'background-image': 'url("../media/skull.png")', 'background-size': 'cover'});
    } else if(this.health >= 100){this.health = 100;}

    this.full += _.random(-5, 0);
    if(this.full <= 0){
      $(`div[data-name=${this.name}]`).find('.photo').css({'background-image': 'url("../media/skull.png")', 'background-size': 'cover'});
    }
  }

  update(){
    $(`div[data-name=${this.name}]`).find('.status > .full > .healthRed > .healthGreen').css('width', this.full +'px');
    $(`div[data-name=${this.name}]`).find('.status > .health > .healthRed > .healthGreen').css('width', this.health +'px');
    $(`div[data-name=${this.name}]`).find('.status > .mood > .healthRed > .healthGreen').css('width', this.mood +'px');

  }


  render(){//rendering function
    $('#pets').append(`<div data-name=${this.name} class=pet>
                        <div class=photo style='background-image:url("${this.speciesImg}")'></div>
                        <div class=text>
                        <div class=info>
                          <div class=name>${this.name}</div>
                          <div class=gender>${this.gender}</div>
                          <div class=age>${this.age}yrs old</div>
                        </div>
                        <div class=status>
                          <div class=health>health:
                            <div class=healthRed>
                              <div class=healthGreen style='width: ${this.health}px'></div>
                            </div>
                          </div>
                          <div class=full>fullness:
                            <div class=healthRed>
                              <div class=healthGreen style='width: ${this.full}px'></div>
                            </div>
                          </div>
                          <div class=mood>mood:
                            <div class=healthRed>
                              <div class=healthGreen style='width: ${this.mood}px'></div>
                            </div>
                          </div>
                          <div class=buttons>
                            <button class=eat>Eat</button>
                            <button class=sleep>Sleep</button>
                            <button class=play>Play</button>
                          </div>
                        </div>
                        </div>
                        </div>`);
  }

}
