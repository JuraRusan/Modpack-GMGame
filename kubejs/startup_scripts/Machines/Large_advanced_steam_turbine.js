MIMachineEvents.registerMachines((e) => {
  // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

  const hatchFluid = e.hatchOf("fluid_input");
  const hatchEnergy = e.hatchOf("energy_output");
  const A_key = e.memberOfBlock("modern_industrialization:solid_titanium_machine_casing");
  const B_key = e.memberOfBlock("modern_industrialization:titanium_machine_casing_pipe");

  const largeAdvancedSteamTurbineShape = e
    .layeredShape("solid_titanium_machine_casing", [
      ["AAA", "AYA", "AAA"],
      ["BBB", "BBB", "BBB"],
      ["BBB", "BBB", "BBB"],
      ["ZZZ", "Z#Z", "ZZZ"],
    ])
    .key("Z", A_key, hatchFluid)
    .key("Y", A_key, hatchEnergy)
    .key("A", A_key, e.noHatch())
    .key("B", B_key, e.noHatch())
    .build();

  e.simpleGeneratorMultiBlock(
    "Large advanced steam turbine", // English name
    "large_advanced_steam_turbine", // Internal name
    largeAdvancedSteamTurbineShape, // Multiblock shape
    256000, // Maximum energy generation rate (eu/tick)
    (builder) => {
      builder.fluid("modern_industrialization:steam", 1);
      builder.fluid("modern_industrialization:heavy_water_steam", 1);
      builder.fluid("modern_industrialization:high_pressure_steam", 8);
      builder.fluid("modern_industrialization:high_pressure_heavy_water_steam", 8);
    }, // The builder (same as for a single block generator)
    "solid_titanium_machine_casing", // Casing of the controller
    "large_advanced_steam_turbine", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false // Side overlay?
  );
});
