import './App.css';
import Place from './components/Place';


import BUImage from './images/BU.png'
import TUFTImage from './images/TUFT.jpg'
import MITImage from './images/MIT.jpg'
import UCBERKImage from './images/UCBERK.jpg'
import STANImage from './images/STAN.jpg'
import GTECHImage from './images/GTECH.jpg'
import RICEImage from './images/RICE.jpg'
import DUKEImage from './images/DUKE.jpg'
import EMORImage from './images/EMOR.jpg'
import PENNImage from './images/PENN.jpg'

const App = () => {

  return (
    <div className="App">
      <h1>Great Universities for Computer Science!</h1>
      <Place name = 'Boston University' location = 'Boston, Ma' image = {BUImage} url='https://www.bu.edu/'/>
      <Place name = 'Tufts University' location = 'Melford, Ma' image = {TUFTImage} url='https://www.tufts.edu/'/>
      <Place name = 'Massachusetts Institute of Technology' location = 'Cambridge, MA' image = {MITImage} url='https://www.mit.edu/'/>
      <Place name = 'UC Berkeley' Location = 'Berkeley, CA' image = {UCBERKImage} url='https://www.berkeley.edu/'/>
      <Place name = 'Stanford University' location = 'Stanford, CA' image = {STANImage} url='https://www.stanford.edu/'/>
      <Place name = 'Georgia Tech' location = 'Atlanta, GA' image = {GTECHImage} url='https://www.gatech.edu/'/>
      <Place name = 'Duke University' location = 'Durham, NC' image = {DUKEImage} url='https://duke.edu/'/>
      <Place name = 'Rice University' location = 'Houston, TX' image = {RICEImage} url='https://www.rice.edu/'/>
      <Place name = 'Emory University' location = 'Atlanta, GA' image = {EMORImage} url='https://www.emory.edu/home/index.html'/>
      <Place name = 'University of Penn' location = 'Phil, PA' image = {PENNImage} url='https://www.upenn.edu/'/>
      
    </div>
  )
}

export default App