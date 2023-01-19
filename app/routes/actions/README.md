# Actions

Actions are side effects.

They are performed as a result of an event.

There are three different types of actions:

- Entry
- Exit
- Transition

Actions always happen due to an event.

```javascript
some_state: {
        on: {
              SOME_EVENT: {
                      target: 'another_event',
                      do: ['']
                  }
            }
    },
    another_state: {
            SILLY_EVENT: {
                    entry: [{type: 'load_data', params: ...}]
                }
        }
```

Actions can be specified as an object where type is the name of the action. If we use object declaration syntax, we can declare additional paramaters, etc.

The XState transition function will not execute actions, that is what the interpret function is for.

```javascript
const createService = interpret(machine).start();
```

The action recieves default arguments that we can reference within our code:

- context
- event

```javascript
TRIGGER: {
        target: "active",
        actions: [(context, event) => (console.log("Activating..."))]
    }
```

## Declaring Actions in Machine Configuration

Instead of declaring actions inline, we can clean up our machine implementation by declaring the actions in a separate machine config object:

```javascript
const machine = createMachine({...}).withConfig({
        actions: {
                load_data: (context, event) => {
                        console.log("Configured loading data..")
                    }
            }
    })
```

### Specifying Actions as an Array

It is recommended to declare the actions within an array. There is always the chance that we will want to execute multiple actions at once.


