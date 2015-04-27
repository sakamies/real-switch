# real-switch

## A real switch for the web

Imagine this: A switch is not a checkbox. It's a range from 0 to 1, with a step of 1. If you apply this in practice, we get almost all of the behavior of a native switch for free. The only additions we need are a click handler and keyboard handler to sprinkle in some accessibility. As a sweetener, let's add some fancy css. No need for drag handlers, or really any funny stuff.

Although, this kind of stuff can't work without caveats of course. The animation is slightly janky on an iPhone. Haven't tested with anything else yet.
