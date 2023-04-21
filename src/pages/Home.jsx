import React from 'react'
import AddTodo from '../components/AddTodo'
import WorkingAndDone from '../components/WorkingAndDone'

function Home() {
  return (
    <div>
        <AddTodo />
        <WorkingAndDone />
    </div>
  )
}

export default Home