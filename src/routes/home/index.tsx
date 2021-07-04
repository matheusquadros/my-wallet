import { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import IGoal from '../../types/IGoal'
import GoalCard from './goals/GoalCard'

function App() {

  const [goals, setGoals] = useState<IGoal[]>([
    {
      description: "Aposentadoria",
      addedAmount: 123,
      allocatedAmount: 123,
      currentAmount: 123,
      nonAllocatedAmount: 123
    },
    {
      description: "Casa",
      addedAmount: 123,
      allocatedAmount: 123,
      currentAmount: 123,
      nonAllocatedAmount: 123
    },
  ])


  return (

    <div className="content-container">
      {
        goals.map(g =>  
          <Link to="/goal">
            <GoalCard goal={g} />
          </Link>
        )
      }

    </div>
  );
}

export default App;
