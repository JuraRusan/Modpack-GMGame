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
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatch = e.hatchOf("item_input", "item_output", "fluid_input", "fluid_output");
  const A_key = e.memberOfBlock("modern_industrialization:heatproof_machine_casing");
  const B_key = e.memberOfBlock("modern_industrialization:fire_clay_bricks");

  const advancedCokeOvenShape = e
    .layeredShape("heatproof_machine_casing", [
      ["AAA", "BBB", "BBB", "   ", "   "],
      ["AAA", "B B", "BBB", "   ", "   "],
      ["AAA", "B B", "BBB", "   ", "   "],
      ["AAA", "B B", "BBB", "   ", "   "],
      ["AAA", "B B", "BBB", "   ", "   "],
      ["AAA", "B B", "BBB", "   ", "   "],
      ["ZAZ", "A A", "ABA", "BBB", "BBB"],
      ["ZAZ", "A A", "B B", "B B", "BBB"],
      ["ZZZ", "A#A", "ABA", "ABA", "ABA"],
    ])
    .key("Z", A_key, hatch)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
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
