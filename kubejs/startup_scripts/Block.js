StartupEvents.registry("block", (event) => {
  event
    .create("kubejs:blaze_block")
    .displayName("Blaze Block")
    .soundType("deepslate_bricks")
    .hardness(3)
    .resistance(2)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool")
    .requiresTool(true);
});
