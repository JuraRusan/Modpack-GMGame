Platform.mods.kubejs.name = 'GMGameMods'

StartupEvents.modifyCreativeTab('kubejs:tab', (event) => {
  event.displayName = 'GMGameMods';
  event.logo = 'kubejs:logo';
});

StartupEvents.registry('item', (e) => {
  e.create('kubejs:logo').displayName('GMGame Logo');
});
