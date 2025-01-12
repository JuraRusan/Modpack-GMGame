ServerEvents.tags("item", (e) => {
  e.remove("c:storage_blocks/silicon", "extendedae:silicon_block");

  e.remove("c:dusts/diamond", "appflux:diamond_dust");
  e.remove("c:dusts/emerald", "appflux:emerald_dust");

  // ---

  e.add("minecraft:mineable/pickaxe", "modern_industrialization:large_advanced_steam_turbine");
  e.add("minecraft:needs_stone_tool", "modern_industrialization:large_advanced_steam_turbine");
  e.add("minecraft:incorrect_for_gold_tool", "modern_industrialization:large_advanced_steam_turbine");
  e.add("minecraft:incorrect_for_wooden_tool", "modern_industrialization:large_advanced_steam_turbine");

  // ---

  e.add("minecraft:mineable/pickaxe", "modern_industrialization:ultimate_synthesizer");
  e.add("minecraft:needs_stone_tool", "modern_industrialization:ultimate_synthesizer");
  e.add("minecraft:incorrect_for_gold_tool", "modern_industrialization:ultimate_synthesizer");
  e.add("minecraft:incorrect_for_wooden_tool", "modern_industrialization:ultimate_synthesizer");

  // ---

  e.add("minecraft:mineable/pickaxe", "modern_industrialization:singularity_nexus_foundry");
  e.add("minecraft:needs_stone_tool", "modern_industrialization:singularity_nexus_foundry");
  e.add("minecraft:incorrect_for_gold_tool", "modern_industrialization:singularity_nexus_foundry");
  e.add("minecraft:incorrect_for_wooden_tool", "modern_industrialization:singularity_nexus_foundry");

  // ---

  e.add("minecraft:mineable/pickaxe", "modern_industrialization:advanced_coke_oven");
  e.add("minecraft:needs_stone_tool", "modern_industrialization:advanced_coke_oven");
  e.add("minecraft:incorrect_for_gold_tool", "modern_industrialization:advanced_coke_oven");
  e.add("minecraft:incorrect_for_wooden_tool", "modern_industrialization:advanced_coke_oven");
});
