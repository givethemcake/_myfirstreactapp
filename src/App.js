import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
              <h1>Hammad</h1>
      <h1>welcome to react</h1>
    < h1>This is a heading </h1>
    <p>This is a paragraph </p>
     <p> <b>This text is bold </b> </p>
    <p>This text should now be red</p>
    <p> " This text is pink </p>
    <p> This text is blue </p>
    <table border ="3">
       <tr><th>Name</th>
       <th> last name</th>
       <th>age</th>
       </tr>
       <tr><td>Hammad </td> <td> Rehan</td><td>14</td> </tr>
       <tr><td>Fatima </td> <td> Rehan</td><td>11</td></tr>
       <tr><td>Dawood </td> <td> Rehan</td><td>10</td></tr>
      </table>
<ol>
    <li>Lahore Qlanders will win</li>
    <li> Karachi Kings will lose </li>  
    <li>Why is there no sialkoti team</li>
</ol>
<dl>
    <dt>Coffe</dt>
    <dd>-Black, no sugar</dd>
    <dt>Tea</dt>
    <dd>-Milk, 2 sugar </dd>
</dl>
 <br/>
 <p>What am i even doing i dont even know bro someone help me  i have created everything i <b> wanted</b> too i dont even know someone pls help me </p>
<a href="https://www.google.com.pk">Visit Google </a>
<br/>
<a href ="https://fail_hona_wala_bache.com.pk">get your exam scores </a>
<ul>
    <li>This is an unordered list item </li>
        <ol>
            <li>This is an ordered list item within an unordered list </li>
            <li>This is also called a nested list i.e a list within another list</li>
                <dl>
                    <dt>This is a definition list </dt>
                    <dd>-These are unique because insted of the list item tags it uses the description term and description definition tags </dd>
                </dl>                   
        </ol>
</ul>               
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
