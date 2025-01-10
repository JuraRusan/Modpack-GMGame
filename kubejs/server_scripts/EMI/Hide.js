RecipeViewerEvents.removeEntriesCompletely("item", (event) => {
  const data = [
    "appflux:diamond_dust",
    "appflux:emerald_dust",
    "megacells:mega_interface",
    "megacells:cable_mega_interface",
    "megacells:mega_pattern_provider",
    "megacells:cable_mega_pattern_provider",
  ];

  data.forEach((id) => {
    event.remove([Ingredient.of(id)]);
  });
});
