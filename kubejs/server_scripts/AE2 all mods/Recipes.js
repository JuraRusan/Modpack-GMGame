let named = (mod, name, type) => {
  return `kubejs:${mod}/${type}/${name.split(":")[1]}`;
};

let ExtendedAECrystalAssembler = (e, idInput, idFluid, idOutput) => {
  let recipeID = named("extendedae", idOutput[0], "crystal_assembler");
  let recipe = {
    type: "extendedae:crystal_assembler",
    input_items: [],
    output: {},
  };

  idInput.forEach((el) => {
    recipe.input_items.push({
      ingredient: { item: el[0] },
      amount: el[1],
    });
  });

  recipe.output = {
    id: idOutput[0],
    count: idOutput[1],
  };

  if (idFluid) {
    recipe.input_fluid = {
      ingredient: { fluid: idFluid[0] },
      amount: idFluid[1],
    };
  }

  e.custom(recipe).id(recipeID);
};

let ExtendedAECircuitCutter = (e, idInput, idOutput) => {
  let recipeID = named("extendedae", idOutput[0], "circuit_cutter");
  let recipe = {
    type: "extendedae:circuit_cutter",
    input: {},
    output: {},
  };

  recipe.input.ingredient = {
    item: idInput[0],
    count: idInput[1],
  };

  recipe.output = {
    id: idOutput[0],
    count: idOutput[1],
  };

  e.custom(recipe).id(recipeID);
};

ServerEvents.recipes((e) => {
  e.shapeless("4x ae2:fluix_covered_cable", "ae2:fluix_covered_dense_cable");
  e.shapeless("4x ae2:fluix_smart_cable", "ae2:fluix_smart_dense_cable");

  // ---

  e.shaped(Item.of("extendedae:infinity_water_cell"), ["CWC", "WXW", "IFI"], {
    C: "modern_industrialization:quantum_tank",
    W: "minecraft:water_bucket",
    X: "megacells:cell_component_256m",
    I: "minecraft:diamond_block",
    F: "advanced_ae:quantum_alloy_block",
  });

  e.shaped(Item.of("extendedae:infinity_cobblestone_cell"), ["CBC", "LXW", "IFI"], {
    C: "modern_industrialization:quantum_barrel",
    B: "minecraft:cobblestone",
    L: "kubejs:infinity_lava_cell",
    W: "extendedae:infinity_water_cell",
    X: "megacells:cell_component_256m",
    I: "minecraft:diamond_block",
    F: "advanced_ae:quantum_alloy_block",
  });

  e.shaped(Item.of("kubejs:infinity_lava_cell"), ["CWC", "WXW", "IFI"], {
    C: "modern_industrialization:quantum_tank",
    W: "minecraft:lava_bucket",
    X: "megacells:cell_component_256m",
    I: "minecraft:diamond_block",
    F: "advanced_ae:quantum_alloy_block",
  });

  e.shaped(Item.of("megacells:bulk_cell_component"), ["CIC", "WXW", "CFC"], {
    C: "ae2:sky_dust",
    W: "megacells:accumulation_processor",
    X: "ae2:quartz_vibrant_glass",
    I: "ae2:spatial_cell_component_128",
    F: "megacells:cell_component_256m",
  });

  e.shaped(Item.of("advanced_ae:quantum_storage_component"), ["CIC", "FXF", "CFC"], {
    C: "advanced_ae:quantum_processor",
    X: "ae2:quartz_vibrant_glass",
    I: "ae2:spatial_cell_component_128",
    F: "ae2:cell_component_256k",
  });

  // ---

  e.remove({ output: "extendedae:circuit_cutter" });

  e.remove({ id: "appflux:inscriber/crush_diamond" });
  e.remove({ id: "appflux:inscriber/crush_emerald" });

  e.remove({ id: "extendedae:cobblestone_cell" });
  e.remove({ id: "extendedae:water_cell" });

  e.remove({ output: "megacells:mega_interface" });
  e.remove({ output: "megacells:cable_mega_interface" });
  e.remove({ output: "megacells:mega_pattern_provider" });
  e.remove({ output: "megacells:cable_mega_pattern_provider" });

  e.remove({ id: "megacells:crafting/bulk_cell_component" });

  e.remove({ id: "advanced_ae:quantum_storage_component" });

  e.remove({ id: "modern_industrialization:compat/ae2/mixer/fluix" });

  e.remove({ id: "modern_industrialization:compat/ae2/calculation_processor" });
  e.remove({ id: "modern_industrialization:compat/ae2/engineering_processor" });
  e.remove({ id: "modern_industrialization:compat/ae2/logic_processor" });

  e.remove({ id: "modern_industrialization:compat/ae2/printed_calculation_processor" });
  e.remove({ id: "modern_industrialization:compat/ae2/printed_engineering_processor" });
  e.remove({ id: "modern_industrialization:compat/ae2/printed_logic_processor" });
  e.remove({ id: "modern_industrialization:compat/ae2/printed_silicon" });
  e.remove({ id: "modern_industrialization:compat/ae2/printed_silicon_from_ingot" });

  e.remove({id: "modern_industrialization:compat/ae2/electrolyzer/ae2_certus_quartz_crystal_to_ae2_charged_certus_quartz_crystal"}); /* prettier-ignore */

  // ---

  e.recipes.modern_industrialization
    .macerator(2, 100)
    .itemIn("extendedae:entro_crystal")
    .itemOut("extendedae:entro_dust");

  // ---

  ExtendedAECrystalAssembler(
    e,
    [
      ["ae2:calculation_processor_press", 1],
      ["ae2:engineering_processor_press", 1],
      ["ae2:logic_processor_press", 1],
      ["ae2:silicon_press", 1],
      ["advanced_ae:quantum_processor_press", 1],
      ["appflux:energy_processor_press", 1],
      ["extendedae:concurrent_processor_press", 1],
      ["megacells:accumulation_processor_press", 1],
    ],
    null,
    ["kubejs:universal_press", 1]
  );

  ExtendedAECrystalAssembler(
    e,
    [
      ["ae2:engineering_processor", 8],
      ["advanced_ae:quantum_processor", 8],
      ["appflux:energy_processor", 8],
      ["extendedae:concurrent_processor", 8],
      ["megacells:accumulation_processor", 8],
      ["extendedae:machine_frame", 1],
      ["kubejs:universal_press", 1],
      ["minecraft:stonecutter", 1],
      ["modern_industrialization:invar_rotary_blade", 1],
    ],
    null,
    ["extendedae:circuit_cutter", 1]
  );

  ExtendedAECircuitCutter(e, ["extendedae:silicon_block", 1], ["ae2:printed_silicon", 9]);
});
