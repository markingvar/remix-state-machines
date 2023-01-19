# Context

There are two common states that our application can have

- Qualitative
- Quantitative

## Qualitative State

This will describe a mode or a status of our app that will determine the behaviour.

## Quantitatave State

Describes things that don't have anything to do directly with the state.

Quantitative state (extended state) is represented using **context**.

We can update context using the assign action creator:

```javascript
assign(..)
```

We can read from context as well:

```javascript
state.context
```

Here's how we would set up our initial context:

```javascript
initial: 'loading_state',
context: {
        count: 42
    }
```

And here is how we can modify context:

```javascript
on: {
        SUCCESS_EVENT: {
                target: "loaded_state",
                actions: [
                  assign({
                          count: 100
                      })
                ]
            }
    }
```

Using the assign function, we can change the values in our context.

Note that only the values that we specify will actually change, other context values will remain untouched.

Instead of assigning static values, like 100 above, we can use a function to work with dynamic data:

```javascript
on: {
        SUCCESS_EVENT: {
                target: "loaded_state",
                actions: [
                  assign({
                          count: (context, event) => context.count + 1,
                      })
                ]
            }
    }
```

This shows us that value that we assign can take a static value or we can use data that already exists in the context or incoming events.

```javascript
actions: [
  assign({
          count: (context, event) => context.count + event.payload.count
      })
]
```


