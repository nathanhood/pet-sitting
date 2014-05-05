var Pet = function Pet(species, speciesImg, gender) {
  "use strict";
  var age = arguments[3] !== (void 0) ? arguments[3] : 3;
  var name = arguments[4] !== (void 0) ? arguments[4] : 'Unknown';
  this.species = species;
  this.speciesImg = ("../media/" + speciesImg);
  this.gender = gender;
  this.age = age * 1;
  this.name = name;
  this.health = _.random(10, 100);
  this.full = _.random(10, 100);
  this.mood = _.random(10, 100);
};
($traceurRuntime.createClass)(Pet, {
  eat: function() {
    "use strict";
    this.full += _.random(3, 6);
    if (this.full >= 100) {
      this.full = 100;
    }
    this.health += _.random(-5, 0);
    if (this.health === 0) {
      $(("div[data-name=" + this.name + "]")).find('.photo').append("<img class=dead src='../media/dead.png'>");
    }
  },
  sleep: function() {
    "use strict";
    this.health += _.random(2, 6);
    if (this.health >= 100) {
      this.health = 100;
    }
    this.mood += _.random(-4, 0);
    if (this.mood === 0) {
      $(("div[data-name=" + this.name + "]")).find('.photo').append("<img class=dead src='../media/dead.png'>");
    }
  },
  play: function() {
    "use strict";
    this.mood += _.random(0, 3);
    if (this.mood >= 100) {
      this.mood = 100;
    }
    this.health += _.random(-2, 5);
    if (this.health === 0) {
      $(("div[data-name=" + this.name + "]")).find('.photo').append("<img class=dead src='../media/dead.png'>");
    } else if (this.health >= 100) {
      this.health = 100;
    }
    this.full += _.random(-5, 0);
    if (this.full === 0) {
      $(("div[data-name=" + this.name + "]")).find('.photo').append("<img class=dead src='../media/dead.png'>");
    }
  },
  update: function() {
    "use strict";
    $(("div[data-name=" + this.name + "]")).find('.status > .full > .healthRed > .healthGreen').css('width', this.full + 'px');
    $(("div[data-name=" + this.name + "]")).find('.status > .health > .healthRed > .healthGreen').css('width', this.health + 'px');
    $(("div[data-name=" + this.name + "]")).find('.status > .mood > .healthRed > .healthGreen').css('width', this.mood + 'px');
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div data-name=" + this.name + " class=pet>\n                        <div class=photo style='background-image:url(\"" + this.speciesImg + "\")'></div>\n                        <div class=text>\n                        <div class=info>\n                          <div class=name>" + this.name + "</div>\n                          <div class=gender>" + this.gender + "</div>\n                          <div class=age>" + this.age + "yrs old</div>\n                        </div>\n                        <div class=status>\n                          <div class=health>health:\n                            <div class=healthRed>\n                              <div class=healthGreen style='width: " + this.health + "px'></div>\n                            </div>\n                          </div>\n                          <div class=full>fullness:\n                            <div class=healthRed>\n                              <div class=healthGreen style='width: " + this.full + "px'></div>\n                            </div>\n                          </div>\n                          <div class=mood>mood:\n                            <div class=healthRed>\n                              <div class=healthGreen style='width: " + this.mood + "px'></div>\n                            </div>\n                          </div>\n                          <div class=buttons>\n                            <button class=eat>Eat</button>\n                            <button class=sleep>Sleep</button>\n                            <button class=play>Play</button>\n                          </div>\n                        </div>\n                        </div>\n                        </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map
