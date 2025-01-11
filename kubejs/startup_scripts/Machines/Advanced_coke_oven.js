let ADVANCED_COKE_OVEN;

MIMachineEvents.registerRecipeTypes((e) => {
  ADVANCED_COKE_OVEN = e
    .register("advanced_coke_oven")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs()
    .withFluidOutputs();
});

MIMachineEvents.registerMachines((e) => {
  const hatch = e.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
  const heatproofMachineCasing = e.memberOfBlock("modern_industrialization:heatproof_machine_casing");
  const fireClayBricks = e.memberOfBlock("modern_industrialization:fire_clay_bricks");

  const advancedCokeOvenShape = e
    .layeredShape("heatproof_machine_casing", [
      ["CCC", "FFF", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["HCH", "C C", "CFC", "FFF", "FFF"],
      ["HCH", "C C", "F F", "F F", "FFF"],
      ["HHH", "C#C", "CFC", "CFC", "CFC"],
    ])
    .key("H", heatproofMachineCasing, hatch)
    .key("C", heatproofMachineCasing, e.noHatch())
    .key("F", fireClayBricks, e.noHatch())
    .build();

  e.simpleSteamCraftingMultiBlock(
    "Advanced coke oven", // English name
    "advanced_coke_oven", // Internal name
    ADVANCED_COKE_OVEN, // Recipe type
    advancedCokeOvenShape, // Multiblock shape
    e.progressBar(77, 41, "arrow"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(56, 35, 1, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(102, 35, 1, 2), // REI item outputs
    (fluidInputs) => fluidInputs.addSlots(36, 35, 1, 2), // REI fluid inputs
    (fluidOutputs) => fluidOutputs.addSlots(122, 35, 1, 2), // REI fluid outputs
    "heatproof_machine_casing", // Casing of the controller
    "advanced_coke_oven", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
