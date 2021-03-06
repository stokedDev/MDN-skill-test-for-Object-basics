/* Object basics 1 */

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      return 'Meow!';
    }
  }
  
  // Put your code here
  var catName = cat["name"]
  cat.greeting()
  cat.color = 'black'

const [parag1, parag2] = [`The cat's name is ${ catName }.`,`The cat's color is ${ cat.color }.`]

/* Object basics 2 */

const faveBand = {
    name: 'getOver',
    nationality: 'U.S. American',
    genre: 'rock',
    members: 3,
    formed: 1980,
    split: false,
    albums: [{name: 'Growth', released: 1988}, {name: 'Growing', released: 1989}]
    }
    
    const bandInfo = `The ${faveBand.nationality} band ${faveBand.name} has played ${faveBand.genre} music since ${faveBand.formed} and having ${faveBand.members} members,  ${faveBand.split == false? 'they are far from splitting up': `they split up in the year of ${faveBand.split}`}, with two albums, "${faveBand.albums[0].name}" released in ${faveBand.albums[0].released} and "${faveBand.albums[1].name}" released in ${faveBand.albums[1].released}.`;

/* Object basics 3 */

const cat0 = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      return `Hello, said ${ this.name } the ${ this.breed }.`;
    }
  }
  
  const catOne = {
    name : 'Meeki',
    breed : 'Bengal',
    color : 'orange',
    greeting: function() {
      return `Hello, said ${ this.name } the ${ this.breed }.`
    }
  }
  
  cat0.greeting();
  catOne.greeting();
      

/* Object basics 4 */

  const Cat = function(name, breed){
      this.name = name;
      this.breed = breed;
      this.color = color;
      this.greet = function(){
          return `Hello, said ${this.name} the ${this.breed} cat.`
      };
  }
  const cat1 = new Cat('Cutie', 'Siamese', color = 'grey')
  const cat2 = new Cat('Beautie', 'Persian', color = 'white')
      cat1.greet() 
      cat2.greet()
