import { useState } from 'react'
import './App.css'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
  const tableData = [
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },
    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },

    {
      feeType: 'Family Sponsorship Form (I-130)',
      costUS: '$535',
      costAbroad: '$535',
    },


  ];
  return (
    <Router>
      <Routes >
        <Route path="/page1"  element={<Page1 />} >
        </Route>
        <Route path="/page2"  element={<Page2 />} >
        </Route>
        <Route path="/page3"  element={<Page3 />} >
        </Route>
      </Routes >
    </Router>
  );
}

export default App
