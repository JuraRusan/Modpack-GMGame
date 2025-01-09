StartupEvents.registry("item", (e) => {
  e.create("kubejs:universal_press").displayName("Universal Press");

  e.create("infinity_lava_cell", "custom_infinity_cell")
    .texture("kubejs:item/infinity_lava_cell")
    .fluidType("minecraft:lava")
    .cellModel("kubejs:block/drive/infinity_lava_cell");
});
