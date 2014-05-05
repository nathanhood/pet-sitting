/* global Pet, pets */
/* jshint unused:false */


//have to make Dragon global

(function(){
  'use strict';

  $('document').ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);//#pets is closest static parent.
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
}



  function eat(){
    let name = $(this).closest('.pet').data('name');//.closest finds closest parent with class of 'pet' and requesting the data variable 'name'.
    let pet = Pet.find(name); //calling class method written inside of pet.es6.js
    pet.eat();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }


  function add(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();//grabs the image in jade file
    let species = $('#species option:selected').text();//grabs text value from dropdown. NOTE: option:selected
    let name = $('#name').val() || undefined;//undefined allows default to engage if input is empty
    let age = $('#age').val() || undefined;

    let pet = new Pet(species, speciesImg, gender, age, name);
    pets.push(pet);
    pet.render();//draws object on the page //class method
  }


})();
