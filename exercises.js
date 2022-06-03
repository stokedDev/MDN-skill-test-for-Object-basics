/* Object basics 1 */

const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  var catName = cat["name"]
  cat.greeting()
  cat.color = 'black'

const [parag1, parag2] = [`The cat's name is ${ catName }.`,`The cat's color is ${ cat.color }.`]


