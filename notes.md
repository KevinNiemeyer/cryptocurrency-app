To Do:

1. create home page - done
2. create single coin page - done
   - create the buttons on the left side - done
   - create the stats on the right side - done
   - combine the CoinStatsCard and CoinStatsHeader in the same component
     2.1 refactor all pages to use ThemeProvider - WIP
3. create search function
4. create sort functions
5. create loader animation
6. create 404 page
7. create infinite scroll

- refactor the CoinList to destructure at sub-component levels

Questions:

- On the CoinPage, I want to implement Breadcrumbs as a component, but not sure how to implement the routing for all pages
- How do I use a variable in the JSON data to set state? JSON returns a list, but I need a specific key out of that list based on the coin I've selected. How do I access that one value?

  Top 100 coins info:

Global coins info:
https://api.coingecko.com/api/v3/global

HTML character codes:
arrows:
down: &#x25B2;
up: &#x25BC;

// code to focus an input on a form when hovered over:
const Input = styled.input` padding: 0.5em; margin: 0.5em; color: palevioletred; background: papayawhip; border: none; border-radius: 3px;`;

class Form extends React.Component {
constructor(props) {
super(props);
this.inputRef = React.createRef();
}

render() {
return (
<Input
ref={this.inputRef}
placeholder="Hover to focus!"
onMouseEnter={() => {
this.inputRef.current.focus()
}}
/>
);
}
}

render(

  <Form />
);
