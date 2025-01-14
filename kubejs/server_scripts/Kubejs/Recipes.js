ServerEvents.recipes((e) => {
  e.recipes.modern_industrialization
    .packer(4, 20 * 20)
    .itemIn("9x kubejs:neutron_dust")
    .itemOut("kubejs:neutronium_accumulation");

  e.recipes.modern_industrialization
    .unpacker(4, 20 * 20)
    .itemIn("kubejs:neutronium_accumulation")
    .itemOut("9x kubejs:neutron_dust");

  e.shaped("kubejs:neutronium_accumulation", ["AAA", "AAA", "AAA"], {
    A: "kubejs:neutron_dust",
  });

  e.shapeless("9x kubejs:neutron_dust", ["kubejs:neutronium_accumulation"]);

  // ---

  e.recipes.modern_industrialization
    .packer(4, 20 * 20)
    .itemIn("9x kubejs:neutron_nugget")
    .itemOut("kubejs:neutronium_ingot");

  e.recipes.modern_industrialization
    .unpacker(4, 20 * 20)
    .itemIn("kubejs:neutronium_ingot")
    .itemOut("9x kubejs:neutron_nugget");

  e.shaped("kubejs:neutronium_ingot", ["AAA", "AAA", "AAA"], {
    A: "kubejs:neutron_nugget",
  });

  e.shapeless("9x kubejs:neutron_nugget", ["kubejs:neutronium_ingot"]);

  // ---

  e.recipes.modern_industrialization
    .packer(4, 20 * 20)
    .itemIn("9x kubejs:neutronium_ingot")
    .itemIn("modern_industrialization:packer_block_template")
    .itemOut("kubejs:neutronium_block");

  e.recipes.modern_industrialization
    .unpacker(4, 20 * 20)
    .itemIn("kubejs:neutronium_block")
    .itemOut("9x kubejs:neutronium_ingot");

  e.shaped("kubejs:neutronium_block", ["AAA", "AAA", "AAA"], {
    A: "kubejs:neutronium_ingot",
  });

  e.shapeless("9x kubejs:neutronium_ingot", ["kubejs:neutronium_block"]);

  // ---

  e.recipes.modern_industrialization
    .compressor(64, 20 * 120)
    .itemIn("kubejs:neutronium_accumulation")
    .itemOut("kubejs:neutron_nugget");

  e.recipes.modern_industrialization
    .macerator(16, 20 * 60)
    .itemIn("kubejs:neutron_nugget")
    .itemOut("kubejs:neutronium_accumulation");

  // ---

  e.recipes.modern_industrialization
    .assembler(16, 20 * 30)
    .itemIn("32x modern_industrialization:copper_fine_wire")
    .itemIn("32x modern_industrialization:electrum_fine_wire")
    .itemIn("16x modern_industrialization:platinum_fine_wire")
    .fluidIn("modern_industrialization:acrylic_acid", 400)
    .fluidIn("modern_industrialization:soldering_alloy", 200)
    .itemOut("2x kubejs:neutron_capturing_mesh");

  // ---

  e.shaped("kubejs:neutronium_catalyst", ["ABA", "CDC", "ABA"], {
    A: "kubejs:neutronium_block",
    B: "modern_industrialization:ultradense_metal_ball",
    C: "modern_industrialization:singularity",
    D: "modern_industrialization:plutonium_block",
  });
});
