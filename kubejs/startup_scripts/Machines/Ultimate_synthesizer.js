let ULTIMATE_SYNTHESIZER;

MIMachineEvents.registerRecipeTypes((event) => {
  ULTIMATE_SYNTHESIZER = event
    .register("ultimate_synthesizer")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs()
    .withFluidOutputs();
});

MIMachineEvents.registerMachines((event) => {
  const hatchItem = event.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
  const hatchEnergy = event.hatchOf("energy_input");
  const iridiumMachineCasing = event.memberOfBlock("modern_industrialization:plasma_handling_iridium_machine_casing");
  const iridiumMachineCasingPipe = event.memberOfBlock("modern_industrialization:iridium_machine_casing_pipe");
  const superconductorCoil = event.memberOfBlock("modern_industrialization:superconductor_coil");
  const fusionChamber = event.memberOfBlock("modern_industrialization:fusion_chamber");
  const iridiumBlock = event.memberOfBlock("modern_industrialization:iridium_block");

  const ultimateSynthesizerShape = event
    .layeredShape("plasma_handling_iridium_machine_casing", [
      ["C   C", "     ", "     ", "     ", "     ", "     "],
      ["CCECC", "PC CP", "P   P", "P   P", "P   P", " B B "],
      ["HCCCH", "CSSSC", " SSS ", " SSS ", " SSS ", "BSSSB"],
      ["HCCCH", " SFS ", " SFS ", " SFS ", " SFS ", " SFS "],
      ["HCCCH", "CSSSC", " SSS ", " SSS ", " SSS ", "BSSSB"],
      ["CC#CC", "PC CP", "P   P", "P   P", "P   P", " B B "],
      ["C   C", "     ", "     ", "     ", "     ", "     "],
    ])
    .key("H", iridiumMachineCasing, hatchItem)
    .key("E", iridiumMachineCasing, hatchEnergy)
    .key("C", iridiumMachineCasing, event.noHatch())
    .key("S", superconductorCoil, event.noHatch())
    .key("P", iridiumMachineCasingPipe, event.noHatch())
    .key("F", fusionChamber, event.noHatch())
    .key("B", iridiumBlock, event.noHatch())
    .build();

  event.simpleElectricCraftingMultiBlock(
    "Ultimate Synthesizer", // English name
    "ultimate_synthesizer", // Internal name
    ULTIMATE_SYNTHESIZER, // Recipe type
    ultimateSynthesizerShape, // Multiblock shape
    event.progressBar(77, 50, "arrow"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(56, 35, 1, 3), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(102, 35, 1, 3), // REI item outputs
    (fluidInputs) => fluidInputs.addSlots(36, 35, 1, 3), // REI fluid inputs
    (fluidOutputs) => fluidOutputs.addSlots(122, 35, 1, 3), // REI fluid outputs
    "plasma_handling_iridium_machine_casing", // Casing of the controller
    "ultimate_synthesizer", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
