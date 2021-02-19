const onTick = (_evt: OnTickPayload) => {
  game.print(serpent.block({ hello: "world", its_nice: "to see you" }))
};

script.on_event(defines.events.on_tick, onTick);
