StartupEvents.registry("item", (e) => {
  e.create("kubejs:universal_press").displayName("Universal Press");

  e.create("kubejs:neutron_dust").displayName("Neutron Dust");
  e.create("kubejs:neutron_nugget").displayName("Neutron Nugget");
  e.create("kubejs:neutron_ingot").displayName("Neutron Ingot");
  e.create("kubejs:neutron_capturing_mesh").displayName("Neutron Capturing Mesh");
  e.create("kubejs:neutron_accumulation").displayName("Neutron Accumulation");
  e.create("kubejs:neutron_star").displayName("Neutron Star");
  e.create("kubejs:charged_neutron_star").displayName("Charged Neutron Star");
  e.create("kubejs:neutron_catalyst").displayName("Neutron Catalyst");

  e.create("infinity_lava_cell", "custom_infinity_cell")
    .texture("kubejs:item/infinity_lava_cell")
    .fluidType("minecraft:lava")
    .cellModel("kubejs:block/drive/infinity_lava_cell");
});
