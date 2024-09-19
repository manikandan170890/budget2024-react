import { Container } from 'semantic-ui-react'
import './App.css';
import MainHeader from './components/MainHeader';

import NewEnteryForm from './components/NewEnteryForm';
import { DisplayBalance } from './components/DisplayBalance';
import { DisplayBalances } from './components/DisplayBalances';
import { EntryLine } from './components/EntryLine';

function App() {
  return (
    <Container>
     <MainHeader title='Budget' type ='h1'/>
     <DisplayBalance size='small'  label='Your Balance' value='2,550.53'/>
      <DisplayBalances/>      
      <MainHeader title='History' type ='h3'/>
      <EntryLine  description='income' value='$10.00'/>
      <EntryLine  description='expense' value='$10.00' isExpense={true}/>
      <EntryLine  description='Something' value='$10.00' isExpense={true}/>
    <MainHeader title='Add new transaction' type ='h3'/>
    <NewEnteryForm/>
    </Container>
  );
}

export default App;
