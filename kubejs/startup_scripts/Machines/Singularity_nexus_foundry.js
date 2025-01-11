let SINGULARITY_NEXUS_FOUNDRY;

MIMachineEvents.registerRecipeTypes((e) => {
  SINGULARITY_NEXUS_FOUNDRY = e.register("singularity_nexus_foundry").withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchItem = e.hatchOf("item_input", "item_output");
  const hatchEnergy = e.hatchOf("energy_input");
  const A_key = e.memberOfBlock("modern_industrialization:plasma_handling_iridium_machine_casing");
  const B_key = e.memberOfBlock("advanced_ae:quantum_alloy_block");
  const C_key = e.memberOfBlock("ae2:not_so_mysterious_cube");
  const D_key = e.memberOfBlock("modern_industrialization:silver_block");
  const E_key = e.memberOfBlock("minecraft:end_rod");
  const F_key = e.memberOfBlock("minecraft:diamond_block");
  const G_key = e.memberOfBlock("modern_industrialization:platinum_block");
  const H_key = e.memberOfBlock("modern_industrialization:raw_uranium_block");

  const singularityNexusFoundryShape = e
    .layeredShape("plasma_handling_iridium_machine_casing", [
      [ "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "      AAAAA      ", "      AAAAA      ", "      AAAAA      ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 " ] /* prettier-ignore */,
      [ "                 ", "                 ", "                 ", "       AAA       ", "       AAA       ", "       AAA       ", "      GAAAG      ", "      ACBCA      ", "      ABBBA      ", "      ACBCA      ", "      GAAAG      ", "       AAA       ", "       AAA       ", "       AAA       ", "                 ", "                 ", "                 " ] /* prettier-ignore */,
      [ "                 ", "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "        D        ", "       DDD       ", "        D        ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 ", "                 " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        D        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        D        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        E        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "       AYA       ", "      GAAAG      ", "                 ", "                 ", "                 ", "                 ", " G             G ", "AA             AA", "AA             AA", "AA             AA", " G             G ", "                 ", "                 ", "                 ", "                 ", "      GAAAG      ", "       AZA       " ] /* prettier-ignore */,
      [ "      AAAAA      ", "   AAAACBCAAAA   ", "  A     D     A  ", " A             A ", " A             A ", " A             A ", "AA             AA", "AC             CA", "ABD     F     DBA", "AC             CA", "AA             AA", " A             A ", " A             A ", " A             A ", "  A     D     A  ", "   AAAACBCAAAA   ", "      AZZZA      " ] /* prettier-ignore */,
      [ "      YAAAY      ", "   AAAABBBAAAA   ", "  A    DDD    A  ", " A      D      A ", " A      D      A ", " A      E      A ", "AA             AA", "ABD     F     DBA", "ABDDDE FHF EDDDBA", "ABD     F     DBA", "AA             AA", " A      E      A ", " A      D      A ", " A      D      A ", "  A    DDD    A  ", "   AAAABBBAAAA   ", "      ZZ#ZZ      " ] /* prettier-ignore */,
      [ "      AAAAA      ", "   AAAACBCAAAA   ", "  A     D     A  ", " A             A ", " A             A ", " A             A ", "AA             AA", "AC             CA", "ABD     F     DBA", "AC             CA", "AA             AA", " A             A ", " A             A ", " A             A ", "  A     D     A  ", "   AAAACBCAAAA   ", "      AZZZA      " ] /* prettier-ignore */,
      [ "       AYA       ", "      GAAAG      ", "                 ", "                 ", "                 ", "                 ", " G             G ", "AA             AA", "AA             AA", "AA             AA", " G             G ", "                 ", "                 ", "                 ", "                 ", "      GAAAG      ", "       AZA       " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        E        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        D        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "        D        ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 " ] /* prettier-ignore */,
      [ "                 ", "                 ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "        D        ", "       DDD       ", "        D        ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "                 ", "                 " ] /* prettier-ignore */,
      [ "                 ", "                 ", "                 ", "       AAA       ", "       AAA       ", "       AAA       ", "      GAAAG      ", "      ACBCA      ", "      ABBBA      ", "      ACBCA      ", "      GAAAG      ", "       AAA       ", "       AAA       ", "       AAA       ", "                 ", "                 ", "                 " ] /* prettier-ignore */,
      [ "                 ", "                 ", "                 ", "                 ", "                 ", "                 ", "       AAA       ", "      AAAAA      ", "      AAAAA      ", "      AAAAA      ", "       AAA       ", "                 ", "                 ", "                 ", "                 ", "                 ", "                 " ] /* prettier-ignore */,
    ])
    .key("Z", A_key, hatchItem)
    .key("Y", A_key, hatchEnergy)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
    .key("C", C_key, e.noHatch())
    .key("D", D_key, e.noHatch())
    .key("E", E_key, e.noHatch())
    .key("F", F_key, e.noHatch())
    .key("G", G_key, e.noHatch())
    .key("H", H_key, e.noHatch())
    .build();

  e.simpleElectricCraftingMultiBlock(
    "Singularity NEXUS foundry", // English name
    "singularity_nexus_foundry", // Internal name
    SINGULARITY_NEXUS_FOUNDRY, // Recipe type
    singularityNexusFoundryShape, // Multiblock shape
    e.progressBar(77, 50, "wiremill"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(56, 35, 1, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(102, 35, 1, 2), // REI item outputs
    () => {}, // REI fluid inputs
    () => {}, // REI fluid outputs
    "plasma_handling_iridium_machine_casing", // Casing of the controller
    "singularity_nexus_foundry", // Overlay folder
    false, // Front overlay?
    true, // Top overlay?
    false // Side overlay?
  );
});
