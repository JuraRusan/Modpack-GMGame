let PARTICLE_NEUTRON_HARVESTER;

MIMachineEvents.registerRecipeTypes((e) => {
  PARTICLE_NEUTRON_HARVESTER = e.register("particle_neutron_harvester").withItemInputs().withItemOutputs();
});

MITweaksMachineEvents.registerPowerlessMachines((e) => {
  e.singleblock(
    "Particle Neutron Harvester", // English name
    "particle_neutron_harvester", // Internal name
    PARTICLE_NEUTRON_HARVESTER, // Recipe type
    186, // Background height (or -1 for default value)
    e.progressBar(77, 41, "arrow"), // REI progress bar
    4, // Number of slots: item inputs
    4, // Number of slots: item outputs
    0, // Number of slots: fluid inputs
    0, // Number of slots: fluid outputs
    16, // Capacity for fluid slots
    (items) => items.addSlots(31, 35, 2, 2).addSlots(107, 35, 2, 2), // REI item inputs/outputs
    (fluids) => {}, // REI fluid inputsoutputs
    "steel", // Casing of the controller
    "particle_neutron_harvester", // Overlay folder
    true, // Front overlay?
    false, // Top overlay?
    false, // Side overlay?
    1, // Base recipe EU
    false // Allow redstone control module?
  );
});
