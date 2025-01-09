ServerEvents.recipes((e) => {
  let energizing = e.recipes.powah.energizing;

  // ----

  e.shaped("kubejs:blaze_block", ["AAA", "AAA", "AAA"], {
    A: "minecraft:blaze_rod",
  });

  // ----

  e.shapeless("9x minecraft:blaze_rod", ["kubejs:blaze_block"]);

  energizing("powah:blazing_crystal_block", ["kubejs:blaze_block"], 120000 * 9 * 0.9);
  energizing("powah:niotic_crystal_block", ["minecraft:diamond_block"], 300000 * 9 * 0.9);
  energizing("powah:spirited_crystal_block", ["minecraft:emerald_block"], 1000000 * 9 * 0.9);

  energizing("2x powah:energized_steel_block", ["minecraft:iron_block", "minecraft:gold_block"], 10000 * 9 * 0.9);

  // ----

  e.remove({ id: "powah:crafting/solar_panel_starter" });
  e.remove({ id: "powah:crafting/solar_panel_basic" });
  e.remove({ id: "powah:crafting/solar_panel_hardened" });
  e.remove({ id: "powah:crafting/solar_panel_blazing" });
  e.remove({ id: "powah:crafting/solar_panel_niotic" });
  e.remove({ id: "powah:crafting/solar_panel_spirited" });
  e.remove({ id: "powah:crafting/solar_panel_nitro" });

  energizing(
    "powah:solar_panel_starter",
    [
      "powah:photoelectric_pane",
      "powah:photoelectric_pane",
      "powah:dielectric_casing",
      "powah:capacitor_basic",
      "powah:capacitor_basic",
      "powah:capacitor_basic",
    ],
    10000
  );
  energizing(
    "powah:solar_panel_basic",
    [
      "powah:solar_panel_starter",
      "powah:solar_panel_starter",
      "powah:dielectric_casing",
      "powah:capacitor_basic_large",
      "powah:capacitor_basic_large",
      "powah:capacitor_basic_large",
    ],
    100000
  );
  energizing(
    "powah:solar_panel_hardened",
    [
      "powah:solar_panel_basic",
      "powah:solar_panel_basic",
      "powah:dielectric_casing",
      "powah:capacitor_hardened",
      "powah:capacitor_hardened",
      "powah:capacitor_hardened",
    ],
    500000
  );
  energizing(
    "powah:solar_panel_blazing",
    [
      "powah:solar_panel_hardened",
      "powah:solar_panel_hardened",
      "powah:dielectric_casing",
      "powah:capacitor_blazing",
      "powah:capacitor_blazing",
      "powah:capacitor_blazing",
    ],
    1000000
  );
  energizing(
    "powah:solar_panel_niotic",
    [
      "powah:solar_panel_blazing",
      "powah:solar_panel_blazing",
      "powah:dielectric_casing",
      "powah:capacitor_niotic",
      "powah:capacitor_niotic",
      "powah:capacitor_niotic",
    ],
    10000000
  );
  energizing(
    "powah:solar_panel_spirited",
    [
      "powah:solar_panel_niotic",
      "powah:solar_panel_niotic",
      "powah:dielectric_casing",
      "powah:capacitor_spirited",
      "powah:capacitor_spirited",
      "powah:capacitor_spirited",
    ],
    50000000
  );
  energizing(
    "powah:solar_panel_nitro",
    [
      "powah:solar_panel_spirited",
      "powah:solar_panel_spirited",
      "powah:dielectric_casing",
      "powah:capacitor_nitro",
      "powah:capacitor_nitro",
      "powah:capacitor_nitro",
    ],
    100000000
  );
});
