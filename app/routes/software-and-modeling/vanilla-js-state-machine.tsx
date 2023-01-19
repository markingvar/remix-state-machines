import { useEffect } from "react";

function transition(state, event) {
  switch (state.status) {
    case "idle":
      if (event.type === "FETCH") {
        console.log("Starting to fetch data");
        return { status: "loading" };
      }
      return state;
      break;
    case "loading":
    // other behavior
    default:
      break;
  }

  return state;
}

const machine = {
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {},
  },
};

function transition2(state, event) {
  const nextState =
    machine.states[state.status]?.on[event.type] ?? state.status;

  return {
    status: nextState,
  };
}

export default function () {
  useEffect(() => {
    window.transition = transition;
    window.transition2 = transition2;
    window.machine = machine;
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Vanilla JS State Machine</h1>
    </div>
  );
}
