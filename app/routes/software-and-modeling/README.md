# What is Software Modeling

> Software modeling is the art of planning ahead.
>
> _David Khourshid_

Software modeling is about creating a layer of abstraction that is one degree seperated from the code.

The code is the implementation layer and the model is the abstraction layer.

## Event-Driven Architecture

Events are a primitive.

Anything that can happen to an app or software that we are programming is an event.

Events are just things that happen.

Events can originate from the user, our systems, or other systems that our system interfaces with.

#### Given-When-Then

**Given a song is not loaded yet**
**When a song is loaded**
**Then the song should start playing**

Given is a state
When refers to an event that happens
Then refers to a new state (the song starts playing)

**Given a song is playing**
**When the pause button is pressed**
**Then the song should be paused**

## State Machine in Vanilla JavaScript

```js
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
    value: musicPlayerMachine.initial,
  },
  event
) {
  const nextState =
    musicPlayerMachine[state.value]?.on[event.type] ?? state.value;

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
```

The transition function will determine what the next state should be given the current state and the event that just happened.


