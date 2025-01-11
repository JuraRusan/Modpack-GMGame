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

  // ---

  e.recipes.modern_industrialization
    .ultimate_synthesizer(512, 20 * 10)
    .itemIn("minecraft:diamond_ore")
    .itemOut("4x minecraft:diamond_ore")
    .fluidIn("modern_industrialization:uu_matter", 10);

  // ---

  e.recipes.modern_industrialization
    .advanced_coke_oven(4, 20 * 60)
    .itemIn("32x minecraft:coal_block")
    .itemOut("32x modern_industrialization:coke_block")
    .fluidOut("modern_industrialization:creosote", 8000);

  // ---

  e.recipes.modern_industrialization
    .singularity_nexus_foundry(2048, 20 * 120)
    .itemIn("modern_industrialization:ultradense_metal_ball")
    .itemIn("64x modern_industrialization:nuke")
    .itemOut("modern_industrialization:singularity")

  // ---
});
