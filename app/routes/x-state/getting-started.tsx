import { useEffect } from "react";
import { createMachine, interpret } from "xstate";

const machine = createMachine({
  initial: "loading",
  states: {
    loading: {
      on: {
        SUCCESS: "loaded",
      },
    },
    loaded: {},
  },
});

export default function XStateGettingStartedRoute() {
  useEffect(() => {
    const service = interpret(machine).start();

    service.subscribe((state) => {
      console.log(state.value);
    });

    window.service = service;
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Getting Started</h1>
    </div>
  );
}
