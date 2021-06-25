To Do:

1. create home page - done
2. create single coin page - done

   - create the buttons on the left side - done
   - create the stats on the right side - done
     2.1 refactor all pages to use ThemeProvider - Done
   - combine the CoinStatsCard and CoinStatsHeader in the same component

3. create search function - WIP

- use API in App ComponentDidMount to store all the coin names in local storage to use in the search function - done
- create search functionality that will display the names as the search term is being typed in - WIP
  - search the local storage for the term
  - pass the term to the coin page to display it

4. create sort functions
5. create loader animation
6. create 404 page
7. create infinite scroll

- refactor the CoinList to destructure at sub-component levels

Questions:

- On the CoinPage, I want to implement Breadcrumbs as a component, but not sure how to implement the routing for all pages
  Old questions:
- how do I implement hasError? (see coinPageActions)
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

camel case video
https://www.loom.com/share/430b1f48c2af42218df762568faf777b

Search function flow:
When I click on the search, I want a blank dropdown to show - got the input to focus, just need the dropdown
When I type in text, I want everything that contains that text to show
When I click on a coin in the dropdown, I want the dropdown to disappear and the text to show in the search field
When I hit enter or button, it takes me to the coin page associated with that coin name
