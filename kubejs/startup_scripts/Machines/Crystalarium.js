let CRYSTALARIUM;

MIMachineEvents.registerRecipeTypes((e) => {
  CRYSTALARIUM = e.register("crystalarium").withItemInputs().withItemOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((e) => {
  e.singleblock(
    "Crystalarium", // English name
    "crystalarium", // Internal name
    CRYSTALARIUM, // Recipe type
    -1, // Background height (or -1 for default value)
    e.progressBar(105, 45, "circuit"), // REI progress bar
    9, // Number of slots: item inputs
    3, // Number of slots: item outputs
    0, // Number of slots: fluid inputs
    0, // Number of slots: fluid outputs
    16, // Capacity for fluid slots
    (itemInputs) => itemInputs.addSlots(31, 35, 2, 2), // REI item inputs
    (itemOutputs) => itemOutputs.addSlots(107, 35, 2, 2), // REI item outputs
    (fluidInputs) => {}, // REI fluid inputs
    (fluidOutputs) => {}, // REI fluid outputs
    "electric", // Casing of the controller
    "crystalarium", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false, // Side overlay?
    1, // Base recipe EU
    false // Allow redstone control module?
  );
});
