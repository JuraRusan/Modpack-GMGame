StartupEvents.registry("block", (e) => {
  e.create("kubejs:blaze_block")
    .displayName("Blaze Block")
    .soundType("deepslate_bricks")
    .hardness(3)
    .resistance(2)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);

  e.create("kubejs:neutronium_block")
    .displayName("Neutronium Block")
    .soundType("netherite_block")
    .hardness(5)
    .resistance(4)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_diamond_tool")
    .requiresTool(true);
});
