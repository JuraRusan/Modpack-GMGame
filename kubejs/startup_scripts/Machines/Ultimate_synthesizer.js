let ULTIMATE_SYNTHESIZER;

MIMachineEvents.registerRecipeTypes((e) => {
  ULTIMATE_SYNTHESIZER = e
    .register("ultimate_synthesizer")
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs()
    .withFluidOutputs();
});

MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchItem = e.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
  const hatchEnergy = e.hatchOf("energy_input");
  const A_key = e.memberOfBlock("modern_industrialization:plasma_handling_iridium_machine_casing");
  const B_key = e.memberOfBlock("modern_industrialization:superconductor_coil");
  const C_key = e.memberOfBlock("modern_industrialization:iridium_machine_casing_pipe");
  const D_key = e.memberOfBlock("modern_industrialization:fusion_chamber");
  const E_key = e.memberOfBlock("modern_industrialization:iridium_block");

  const ultimateSynthesizerShape = e
    .layeredShape("plasma_handling_iridium_machine_casing", [
      ["A   A", "     ", "     ", "     ", "     ", "     "],
      ["AAYAA", "CA AC", "C   C", "C   C", "C   C", " E E "],
      ["ZAAAZ", "ABBBA", " BBB ", " BBB ", " BBB ", "EBBBE"],
      ["ZAAAZ", " BDB ", " BDB ", " BDB ", " BDB ", " BDB "],
      ["ZAAAZ", "ABBBA", " BBB ", " BBB ", " BBB ", "EBBBE"],
      ["AA#AA", "CA AC", "C   C", "C   C", "C   C", " E E "],
      ["A   A", "     ", "     ", "     ", "     ", "     "],
    ])
    .key("Z", A_key, hatchItem)
    .key("Y", A_key, hatchEnergy)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
    .key("C", C_key, e.noHatch())
    .key("D", D_key, e.noHatch())
    .key("E", E_key, e.noHatch())
    .build();

  e.simpleElectricCraftingMultiBlock(
    "Ultimate Synthesizer", // English name
    "ultimate_synthesizer", // Internal name
    ULTIMATE_SYNTHESIZER, // Recipe type
    ultimateSynthesizerShape, // Multiblock shape
    e.progressBar(77, 50, "arrow"), // REI progress bar
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
