StartupEvents.registry("item", (e) => {
  e.create("kubejs:universal_press").displayName("Universal Press");

  e.create("kubejs:neutron_dust").displayName("Neutron Dust");
  e.create("kubejs:neutron_nugget").displayName("Neutron Nugget");
  e.create("kubejs:neutronium_ingot").displayName("Neutronium Ingot");
  e.create("kubejs:neutron_capturing_mesh").displayName("Neutron Capturing Mesh");
  e.create("kubejs:neutronium_accumulation").displayName("Neutronium Accumulation");
  e.create("kubejs:neutronium_star").displayName("Neutronium Star");
  e.create("kubejs:charged_neutronium_star").displayName("Charged Neutronium Star");
  e.create("kubejs:neutronium_catalyst").displayName("Neutronium Catalyst");

  e.create("infinity_lava_cell", "custom_infinity_cell")
    .texture("kubejs:item/infinity_lava_cell")
    .fluidType("minecraft:lava")
    .cellModel("kubejs:block/drive/infinity_lava_cell");
});
