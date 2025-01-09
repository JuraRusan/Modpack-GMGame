ServerEvents.recipes(e => {
  let energizing = e.recipes.powah.energizing

  e.shaped('kubejs:blaze_block', ['AAA', 'AAA', 'AAA'], {
    A: 'minecraft:blaze_rod',
  });

  e.shapeless('9x minecraft:blaze_rod', ['kubejs:blaze_block']);


  energizing('powah:blazing_crystal_block', ['kubejs:blaze_block'], 120000 * 9 * 0.9)
  energizing('powah:niotic_crystal_block', ['minecraft:diamond_block'], 300000 * 9 * 0.9)
  energizing('powah:spirited_crystal_block', ['minecraft:emerald_block'], 1000000 * 9 * 0.9)

  energizing('2x powah:energized_steel_block', ['minecraft:iron_block', 'minecraft:gold_block'], 10000 * 9 * 0.9)
});