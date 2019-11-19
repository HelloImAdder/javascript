var vayne = {
  range: 550,
  atkDamage: 60,
  atkSpeed: 0.87,
  mvSpeed: 330,
  Armor: 23,
  magicR: 30,
  skins: ['Soulstealer', 'Project', 'DragonSlayer', 'Vindicator'],
  skills: ['Tumble', 'Silver Bolts', 'Condemn', 'Final Hour'],

  howMuchRange: function() {
  console.log(`Vayne tem ${vayne.skins.length} skins!`)
  },
  }
  vayne.skins.forEach((value, index) => {
    console.log(`skin ${value}`);
  });

  function minhaFuncao(sobrenome, nome, idade) {
    console.log('o nome é:', nome);
    console.log('o sobrenome é:', sobrenome);
    console.log('a idade é:', idade);
  }
  minhaFuncao('Pedro', 'Zimpel', '16'); 