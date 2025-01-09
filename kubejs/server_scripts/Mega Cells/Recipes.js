ServerEvents.recipes((e) => {
  e.remove({ output: "megacells:mega_interface" });
  e.remove({ output: "megacells:cable_mega_interface" });
  e.remove({ output: "megacells:mega_pattern_provider" });
  e.remove({ output: "megacells:cable_mega_pattern_provider" });
});