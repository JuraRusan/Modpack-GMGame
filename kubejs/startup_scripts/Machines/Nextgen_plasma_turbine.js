MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchFluid = e.hatchOf("fluid_input");
  const hatchEnergy = e.hatchOf("energy_output");
  const A_key = e.memberOfBlock("modern_industrialization:plasma_handling_iridium_machine_casing");
  const B_key = e.memberOfBlock("modern_industrialization:iridium_machine_casing_pipe");
  const C_key = e.memberOfBlock("modern_industrialization:superconductor_coil");

  const nextgenPlasmaTurbineShape = e
    .layeredShape("plasma_handling_iridium_machine_casing", [
      ["CACAC", "CBBBC", "CAYAC", "CBBBC"],
      ["BBBBB", "BBBBB", "BBBBB", "BCBCB"],
      ["BBBBB", "BBBBB", "BBBBB", "BBBBB"],
      ["CBBBC", "BBBBB", "BBBBB", "CBABC"],
      ["BBBBB", "BBBBB", "BBBBB", "BBBBB"],
      ["BBBBB", "BBBBB", "BBBBB", "BCBCB"],
      ["CZCZC", "CBBBC", "CA#AC", "CBBBC"],
    ])
    .key("Z", A_key, hatchFluid)
    .key("Y", A_key, hatchEnergy)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
    .key("C", C_key, e.noHatch())
    .build();

  e.simpleGeneratorMultiBlock(
    "Next-Gen Plasma Turbine", // English name
    "nextgen_plasma_turbine", // Internal name
    nextgenPlasmaTurbineShape, // Multiblock shape
    (1 << 20) * 16, // REI progress bar
    (builder) => {
      builder.fluid("modern_industrialization:helium_plasma", 100000);
    }, // The builder (same as for a single block generator)
    "plasma_handling_iridium_machine_casing", // Casing of the controller
    "nextgen_plasma_turbine", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
