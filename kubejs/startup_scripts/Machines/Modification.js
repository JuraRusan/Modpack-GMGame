const modifyBlock = (e, blockId) => {
  e.modify(blockId, (block) => {
    block.destroySpeed = 2;
    block.explosionResistance = 600.0;
    block.requiresTool = true;
  });
};

BlockEvents.modification((e) => {
  modifyBlock(e, "modern_industrialization:large_advanced_steam_turbine");
  modifyBlock(e, "modern_industrialization:ultimate_synthesizer");
  modifyBlock(e, "modern_industrialization:singularity_nexus_foundry");
  modifyBlock(e, "modern_industrialization:advanced_coke_oven");
});
