To Do:

1. create home page - done
2. create single coin page - WIP
   - create the buttons on the left side - done
   - create the stats on the right side
3. create search function
4. create sort functions
5. create loader
6. create 404 page
7. create infinite scroll

Top 100 coins info:

Global coins info:
https://api.coingecko.com/api/v3/global

questions:
On the CoinPage, I want to implement Breadcrumbs as a component, but not sure how to implement the routing for all pages
On the buttongroup.styles, I'm trying to use ThemeProvider on line 25, but it's not working out.

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
