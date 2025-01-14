let CRYSTALARIUM;

MIMachineEvents.registerRecipeTypes((e) => {
  CRYSTALARIUM = e.register("crystalarium").withItemInputs().withItemOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((e) => {
  e.singleblock(
    "Crystalarium", // English name
    "crystalarium", // Internal name
    CRYSTALARIUM, // Recipe type
    186, // Background height (or -1 for default value)
    e.progressBar(85, 45, "circuit"), // REI progress bar
    3, // Number of slots: item inputs
    9, // Number of slots: item outputs
    0, // Number of slots: fluid inputs
    0, // Number of slots: fluid outputs
    16, // Capacity for fluid slots
    (items) => items.addSlots(32, 27, 1, 3).addSlots(109, 27, 3, 3), // REI item inputs/outputs
    (fluids) => {}, // REI fluid inputsoutputs
    "steel", // Casing of the controller
    "crystalarium", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false, // Side overlay?
    1, // Base recipe EU
    false // Allow redstone control module?
  );
});
