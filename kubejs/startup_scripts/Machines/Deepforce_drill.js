let DEEPFORCE_DRILL;

MIMachineEvents.registerRecipeTypes((e) => {
  DEEPFORCE_DRILL = e.register("deepforce_drill").withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchItem = e.hatchOf("item_input", "item_output");
  const hatchEnergy = e.hatchOf("energy_input");
  const A_key = e.memberOfBlock("modern_industrialization:steel_block");
  const B_key = e.memberOfBlock("modern_industrialization:steel_machine_casing");
  const C_key = e.memberOfBlock("advanced_ae2:quantum_alloy_wall");
  const D_key = e.memberOfBlock("minecraft:diamond_block");
  const E_key = e.memberOfBlock("modern_industrialization:stainless_steel_machine_casing_pipe");
  const F_key = e.memberOfBlock("modern_industrialization:bronze_machine_casing");
  const G_key = e.memberOfBlock("minecraft:tinted_glass");
  const H_key = e.memberOfBlock("modern_industrialization:turbo_machine_hull");

  const deepforceDrillShape = e
    .layeredShape("clean_stainless_steel_machine_casing", [
      ["ABBBBBA", "CD   DC", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ",] /* prettier-ignore */,
      ["BAAAAAB", "DEYZYED", " F   F ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", " F   F ", " F   F ", " HHHHH ",] /* prettier-ignore */,
      ["BAEEEAB", " EEEEE ", "  EEE  ", "  FEF  ", "  FEF  ", "  CEC  ", "  CEC  ", "  CEC  ", "  EEE  ", "  EGE  ", "  EEE  ", "  CEC  ", "  CEC  ", "  CEC  ", "  CEC  ", "  CEC  ", "  EEE  ", "  EGE  ", "  EEE  ", "  CEC  ", "  CEC  ", "  CEC  ", "  FEF  ", "  FEF  ", "  EEE  ", "  EEE  ", " HEEEH ",] /* prettier-ignore */,
      ["BAE EAB", " EE EE ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  G G  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  G G  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", "  E E  ", " HEEEH ",] /* prettier-ignore */,
      ["BAEEEAB", " EEEEE ", "  EEE  ", "  FEF  ", "  FEF  ", "  CEC  ", "  CEC  ", "  CEC  ", "  EEE  ", "  EGE  ", "  EEE  ", "  CEC  ", "  CEC  ", "  CEC  ", "  CEC  ", "  CEC  ", "  EEE  ", "  EGE  ", "  EEE  ", "  CEC  ", "  CEC  ", "  CEC  ", "  FEF  ", "  FEF  ", "  EEE  ", "  EEE  ", " HEEEH ",] /* prettier-ignore */,
      ["BAAAAAB", "DEE#EED", " F   F ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", " F   F ", " F   F ", " HHHHH ",] /* prettier-ignore */,
      ["ABBBBBA", "CD   DC", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ", "       ",] /* prettier-ignore */,
    ])
    .key("Z", E_key, hatchItem)
    .key("Y", E_key, hatchEnergy)
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
    "Deepforce drill", // English name
    "deepforce_drill", // Internal name
    DEEPFORCE_DRILL, // Recipe type
    deepforceDrillShape, // Multiblock shape
    e.progressBar(77, 43, "arrow"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(31, 35, 2, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(107, 35, 2, 2), // REI item outputs
    (fluidInputs) => {}, // REI fluid inputs
    (fluidOutputs) => {}, // REI fluid outputs
    "clean_stainless_steel_machine_casing", // Casing of the controller
    "deepforce_drill", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
