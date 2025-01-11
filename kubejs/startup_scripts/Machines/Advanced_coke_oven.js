let ADVANCED_COKE_OVEN;

MIMachineEvents.registerRecipeTypes((event) => {
  ADVANCED_COKE_OVEN = event
    .register("advanced_coke_oven")
    .withItemInputs()
    .withItemOutputs()
    .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
  const hatchItem = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
  const hatchEnergy = event.hatchOf("energy_input");
  const heatproofMachineCasing = event.memberOfBlock("modern_industrialization:heatproof_machine_casing");
  const fireClayBricks = event.memberOfBlock("modern_industrialization:fire_clay_bricks");

  const advancedCokeOvenShape = event
    .layeredShape("heatproof_machine_casing", [
      ["CEC", "FFF", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["CCC", "F F", "FFF", "   ", "   "],
      ["HCH", "C C", "CFC", "FFF", "FFF"],
      ["HCH", "C C", "F F", "F F", "FFF"],
      ["HCH", "C#C", "CFC", "CFC", "CFC"],
    ])
    .key("H", heatproofMachineCasing, hatchItem)
    .key("E", heatproofMachineCasing, hatchEnergy)
    .key("C", heatproofMachineCasing, event.noHatch())
    .key("F", fireClayBricks, event.noHatch())
    .build();

  event.simpleSteamCraftingMultiBlock(
    "Advanced coke oven", // English name
    "advanced_coke_oven", // Internal name
    ADVANCED_COKE_OVEN, // Recipe type
    advancedCokeOvenShape, // Multiblock shape
    event.progressBar(77, 41, "arrow"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(56, 35, 1, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(102, 35, 1, 2), // REI item outputs
    (fluidInputs) => {}, // REI fluid inputs
    (fluidOutputs) => fluidOutputs.addSlots(122, 35, 1, 2), // REI fluid outputs
    "heatproof_machine_casing", // Casing of the controller
    "advanced_coke_oven", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
