let MEGAPRESS;

MIMachineEvents.registerRecipeTypes((e) => {
  MEGAPRESS = e.register("megapress").withItemInputs().withItemOutputs();
});

MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchItem = e.hatchOf("item_input", "item_output");
  const hatchEnergy = e.hatchOf("energy_input");
  const A_key = e.memberOfBlock("modern_industrialization:stainless_steel_machine_casing_pipe");
  const B_key = e.memberOfBlock("modern_industrialization:clean_stainless_steel_machine_casing");
  const C_key = e.memberOfBlock("modern_industrialization:solid_titanium_machine_casing");

  const megapressShape = e
    .layeredShape("clean_stainless_steel_machine_casing", [
      [" AAAAA ", " AZYZA ", "  BBB  ", "  CCC  ", "  CCC  ", "  BBB  ", " ABABA ", " AAAAA "],
      ["AAAAAAA", "ABBBBBA", " BBBBB ", " CCCCC ", " CCCCC ", " BBBBB ", "ABBBBBA", "AAAAAAA"],
      ["AAAAAAA", "ZBBBBBZ", "BBBBBBB", "CCCCCCC", "CCCCCCC", "BBBBBBB", "BBBBBBB", "AAAAAAA"],
      ["AAAAAAA", "ABBBBBA", "BBBBBBB", "CCCCCCC", "CCCCCCC", "BBBBBBB", "ABBBBBA", "AAAAAAA"],
      ["AAAAAAA", "ZBBBBBZ", "BBBBBBB", "CCCCCCC", "CCCCCCC", "BBBBBBB", "BBBBBBB", "AAAAAAA"],
      ["AAAAAAA", "ABBBBBA", " BBBBB ", " CCCCC ", " CCCCC ", " BBBBB ", "ABBBBBA", "AAAAAAA"],
      [" AAAAA ", " AB#BA ", "  BBB  ", "  CCC  ", "  CCC  ", "  BBB  ", " ABABA ", " AAAAA "],
    ])
    .key("Z", B_key, hatchItem)
    .key("Y", B_key, hatchEnergy)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
    .key("C", C_key, e.noHatch())
    .build();

  e.simpleElectricCraftingMultiBlock(
    "Megapress", // English name
    "megapress", // Internal name
    MEGAPRESS, // Recipe type
    megapressShape, // Multiblock shape
    e.progressBar(77, 43, "compress"), // REI progress bar
    (itemInputs) => itemInputs.addSlots(31, 35, 2, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(107, 35, 2, 2), // REI item outputs
    (fluidInputs) => {}, // REI fluid inputs
    (fluidOutputs) => {}, // REI fluid outputs
    "clean_stainless_steel_machine_casing", // Casing of the controller
    "megapress", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
