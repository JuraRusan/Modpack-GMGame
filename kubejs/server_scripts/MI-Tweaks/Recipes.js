ServerEvents.recipes((e) => {
  e.recipes.modern_industrialization
    .crystalarium(1, 20 * 60)
    .itemIn("ae2:flawed_budding_quartz", 0.02)
    .itemOut("2x ae2:certus_quartz_crystal")
    .itemOut("ae2:certus_quartz_crystal", 0.5)
    .itemOut("ae2:certus_quartz_crystal", 0.2);

  // ---

  e.shaped(Item.of("mi_tweaks:particle_neutron_harvester"), ["ACA", "BDB", "ACA"], {
    A: "modern_industrialization:robot_arm",
    B: "modern_industrialization:stainless_steel_rotor",
    C: "modern_industrialization:advanced_motor",
    D: "modern_industrialization:turbo_machine_hull",
  });

  e.recipes.modern_industrialization
    .particle_neutron_harvester(1, 20 * 240)
    .itemIn("kubejs:neutron_capturing_mesh", 0.06)
    .itemOut("kubejs:neutron_dust")
    .itemOut("kubejs:neutron_dust", 0.12)
    .itemOut("kubejs:neutron_accumulation", 0.01);
});
