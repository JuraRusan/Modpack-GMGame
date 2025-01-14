ServerEvents.recipes((e) => {
  e.recipes.modern_industrialization
    .crystalarium(1, 20 * 60)
    .itemIn("ae2:flawed_budding_quartz", 0.02)
    .itemOut("2x ae2:certus_quartz_crystal")
    .itemOut("ae2:certus_quartz_crystal", 0.5)
    .itemOut("ae2:certus_quartz_crystal", 0.2);
});
