1. `npm i`
2. Change something in [four/src/lib/four/four.component.stories.ts](four/src/lib/four/four.component.stories.ts)
3. `nx show projects --affected`



And then

1. `nx build five`
2. Change something in [four/src/lib/four/four.component.stories.ts](four/src/lib/four/four.component.stories.ts)
3. `nx build five` reads output from cache

And then

1. `nx build five`
2. Change something in [four/src/lib/four/four.component.stories.ts](four/src/lib/four/four.component.stories.ts)
3. `nx affected -t build` builds `five` and `four`, but says read output from cache for both