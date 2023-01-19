import { useEffect } from "react";
// Model the music player in a basic js state machine

const musicPlayerMachine = {
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
};

function transition(
  state = {
    value: machine.initial,
  },
  event
) {
  const nextState =
    musicPlayerMachine.states[state.value]?.on[event.type] ?? state.status;

  if (!nextState) {
    return state;
  }

  return {
    ...state,
    value: nextState,
  };
}

let currentState = {
  value: musicPlayerMachine.initial,
};

const service = {
  send: (event) => {
    currentState = transition(currentState, event);
    console.log(currentState);
  },
};

export default function StateModelingExercise() {
  useEffect(() => {
    const initialState = (window.transition = transition);
    window.musicPlayerMachine = musicPlayerMachine;
    window.service = service;
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">State Modeling Exercise</h1>
    </div>
  );
}
