ServerEvents.recipes((e) => {
  e.remove({ id: "modern_industrialization:electric_age/machine/assembler/replicator" });

  e.remove({ id: "modern_industrialization:materials/blast_furnace/molten_redstone" });
  e.remove({ id: "modern_industrialization:materials/vacuum_freezer/redstone" });

  e.remove({ id: "modern_industrialization:vanilla_recipes/implosion_compressor/nether_star" });
  e.remove({ id: "modern_industrialization:electric_age/component/implosion_compressor/singularity" });

  // ---

  e.recipes.modern_industrialization
    .blast_furnace(512, 20 * 10)
    .itemIn("modern_industrialization:iridium_ingot")
    .fluidOut("kubejs:molten_iridium", 250);

  e.recipes.modern_industrialization
    .blast_furnace(8, 20 * 60)
    .itemIn("modern_industrialization:soldering_alloy_block")
    .fluidOut("modern_industrialization:soldering_alloy", 810);

  // ------------------------------ LARGE_ADVANCED_STEAM_TURBINE

  e.shaped(Item.of("modern_industrialization:large_advanced_steam_turbine"), ["ACA", "BDB", "ACA"], {
    A: "modern_industrialization:large_steam_turbine",
    B: "modern_industrialization:titanium_rotor",
    C: "modern_industrialization:large_advanced_pump",
    D: "modern_industrialization:quantum_machine_hull",
  });

  e.recipes.modern_industrialization
    .assembler(8, 20 * 10)
    .itemIn("4x modern_industrialization:large_steam_turbine")
    .itemIn("2x modern_industrialization:titanium_rotor")
    .itemIn("2x modern_industrialization:large_advanced_pump")
    .itemIn("modern_industrialization:quantum_machine_hull")
    .itemOut("modern_industrialization:large_advanced_steam_turbine");

  // ------------------------------ ADVANCED_COKE_OVEN

  e.shaped(Item.of("modern_industrialization:advanced_coke_oven"), ["ABA", "BCB", "ABA"], {
    A: "modern_industrialization:heatproof_machine_casing",
    B: "modern_industrialization:fire_clay_bricks",
    C: "modern_industrialization:coke_oven",
  });

  e.recipes.modern_industrialization
    .packer(4, 20 * 10)
    .itemIn("modern_industrialization:coke_oven")
    .itemIn("4x modern_industrialization:fire_clay_bricks")
    .itemIn("4x modern_industrialization:heatproof_machine_casing")
    .itemOut("modern_industrialization:advanced_coke_oven");

  // ---

  e.recipes.modern_industrialization
    .advanced_coke_oven(4, 20 * 90)
    .itemIn("32x minecraft:coal_block")
    .itemOut("32x modern_industrialization:coke_block")
    .fluidOut("modern_industrialization:creosote", 8000);

  // ------------------------------ SINGULARITY_NEXUS_FOUNDRY

  e.recipes.modern_industrialization
    .assembler(64, 20 * 120)
    .itemIn("64x modern_industrialization:silver_block")
    .itemIn("64x modern_industrialization:robot_arm")
    .itemIn("32x modern_industrialization:quantum_machine_hull")
    .itemIn("16x ae2:not_so_mysterious_cube")
    .itemIn("16x advanced_ae:quantum_alloy_block")
    .itemIn("16x modern_industrialization:platinum_block")
    .itemIn("2x modern_industrialization:superconductor_storage_unit")
    .itemIn("2x modern_industrialization:plasma_handling_iridium_machine_casing")
    .fluidIn("kubejs:molten_iridium", 4000)
    .fluidIn("kubejs:molten_neutronium", 4000)
    .itemOut("modern_industrialization:singularity_nexus_foundry");

  // ---

  e.recipes.modern_industrialization
    .singularity_nexus_foundry(2048, 20 * 120)
    .itemIn("64x modern_industrialization:ultradense_metal_ball")
    .itemIn("64x modern_industrialization:nuke")
    .itemIn("64x modern_industrialization:plutonium_block")
    .itemIn("64x minecraft:nether_star")
    .itemOut("modern_industrialization:singularity");

  e.recipes.modern_industrialization
    .singularity_nexus_foundry(536870912, 20 * 3840)
    .itemIn("kubejs:neutronium_star")
    .itemOut("kubejs:charged_neutronium_star");

  // ------------------------------ ULTIMATE_SYNTHESIZER

  e.recipes.modern_industrialization
    .assembler(1024, 20 * 480)
    .itemIn("32x modern_industrialization:quantum_circuit")
    .itemIn("32x modern_industrialization:quantum_machine_hull")
    .itemIn("8x modern_industrialization:quantum_upgrade")
    .itemIn("2x modern_industrialization:quantum_barrel")
    .itemIn("2x modern_industrialization:quantum_tank")
    .fluidIn("modern_industrialization:uu_matter", 16000)
    .fluidIn("modern_industrialization:uu_matter", 16000)
    .itemOut("modern_industrialization:ultimate_synthesizer");

  // ---

  e.recipes.modern_industrialization
    .ultimate_synthesizer(1024, 20 * 480)
    .itemIn("32x kubejs:neutronium_catalyst")
    .fluidIn("modern_industrialization:helium_3", 1000 * 128)
    .fluidIn("advanced_ae:quantum_infusion_source", 1000 * 1024)
    .fluidIn("modern_industrialization:uu_matter", 1000 * 128)
    .fluidIn("modern_industrialization:argon", 1000 * 256)
    .fluidIn("modern_industrialization:cryofluid", 1000 * 256)
    .itemOut("kubejs:neutronium_star");
});
