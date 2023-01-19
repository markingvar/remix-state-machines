import { useEffect } from "react";
import { createMachine, interpret } from "xstate";
import { inspect } from "@xstate/inspect";

const machine = createMachine({
  initial: "loading",
  states: {
    loading: {
      on: {
        LOADED: "playing",
      },
    },
    playing: {
      on: {
        PAUSE: "paused",
      },
    },
    paused: {
      on: {
        PLAY: "playing",
      },
    },
  },
});

export default function XStateStateTransitionsRoute() {
  useEffect(() => {
    const service = interpret(machine, {
      devTools: true,
    }).start();
    service.subscribe((state) => {
      console.log(state.value);
    });
    window.service = service;

    inspect({
      iframe: false,
      url: "https://stately.ai/viz",
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">State Transitions Exercise</h1>
    </div>
  );
}
