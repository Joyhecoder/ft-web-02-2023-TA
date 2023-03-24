## Flex Box

### Demo *[15 mins]* - Layout Methods

At this point, students will not have really seen many layout techniques, except possibly through their own experimentation. Explain the history of layouts (tables > frames > floats) but don't go into too much depth here. A good way to start with flex is to explain the relationship between the container (parent) and the items (children).

Start with `display: flex` then go through the `flex-direction` values: `row`, `column` and `-reverse`. Show a few demonstrations of each.

Demonstrate `justify-content` (aligns with main axis) and `align-items` (aligns with cross-axis) and show the various examples of each, based on items with different sizes.

### Exercise *[20 mins]* - Header Logo & Nav

Introduce the exercise for the [West Greenwich Estates Landing Page](./exercise), show them the [screenshot of the layout](./exercise/screenshots/wedding-venue-desktop.jpeg) they are aiming to achieve, get them set up with a new repo using the starter code.

Get the students to layout the nav bar using flex. The logo should be on the left, and the nav should be on the right. The links should be aligned to the vertical center of the header. All of this can be achieved through changes to `.page-header-content` and `.header-nav`.

### Exercise *[20 mins]* - Pricing Cards

Get the students to layout the pricing section using flex. It will need to be set to `display: flex`. Have them also adjust the list section so that all the text and buttons are centered with the card. Refer to the screenshot for clarification. Both the `.event-card` and the `.event-card ul` will need to be made flex columns. They will need to use the appropriate `justify-content` and `align-items` values to align the content to the middle. Have them also remove the bullet points and padding from the `ul`.

### Demo *[5 mins]* - Flex Wrap

After each exercise, have the students commit and push their work up to GitHub.

Demonstrate `flex-wrap`, and how it will work on `row`s automatically, and columns if the parent has a fixed height specified. Ask around if any students tried the site on a small browser width and if they noticed any issues. When the browser is too narrow, the cards stretch off the edge, causing a horizontal scrollbar. Resolve this with the next exercise.

### Exercise *[10 mins]* - Card Width and Wrapping

This exercise will be considered resolved if the text in the cards does not wrap (set a `min-width` on the `.event-card`) and the row wraps across to a new line on narrow screens.

### Demo (optional) *[5 mins]* - `flex-flow` shorthand

This is an opportunity to point out the `flex-flow` shorthand and demonstrate how you can do both flex-direction and flex-wrap in 1 line. Talk about why reducing css is good (load times).

### Demo *[10 mins]* - `align-items` vs `align-content`

Commit and push code.

The key takeaway here is that `align-content` is how each line of "flex items" aligns to the "flex container", and `align-items` is how the "flex items" align to each line. A "line" will either be a row or a column, based on the `flex-direction`.

Demonstrate `align-content` only makes a difference when the cross axis has a fixed size (i.e. when `flex-direction` is `row` has a `height` set, or `flex-direction` is `column`).

### Exercise *[20 mins]* - Vendor List

Have the students apply all that they have learned so far to get the vendor logos into a row that wraps, and each logo aligns to the center of their rows.

### Demo *[10 mins]* - Flex Grow

Commit and push code.

Demonstrate how `flex-grow` works by taking up "parts" of the remaining space left in the flex container. It is `0` by default, so all of the items take up 0 parts of the remaining space. Here are some examples:
* If you set only 1 flex item to `flex-grow: 1` the it will take up 1 part of the remaining space and the other items will take 0. This makes a total of 1 part, assigned to the 1 flex item.
* If you change a second item to use `flex-grow: 2`, then all the rest will take 0, the first will take 1, and the second will take 2 parts. This is a total of 3 parts, assigned to 2 flex items.

A relatable real-world example is mixing drinks or following a recipe. For example, 1 part whiskey and 2 parts soda. The size of the drink can change, but the "parts" remain the same portion.

### Exercise *[20 mins]* - Align Card Buttons

Point out on the screenshot that the buttons for the pricing cards all align to each other. Get them to attempt this solution on their own. It can be achieved by assigning `flex-grow: 1` to the `.card-body` so long as the `.event-card` is set to use `display: flex` and `flex-direction: column`.
