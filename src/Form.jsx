import React from 'react'
import './global.css'

const Form = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label>Course</label>
          <input type="text" placeholder='Enter Course' name='course'/>
        </div>

        <div className="form-group">
          <label>Trainer</label>
          <input type="text" placeholder='Enter Trainer' name='trainer' />
        </div>

        <div className="form-group">
          <button>submit</button>
        </div>
      </form> 
    </>
  )
}

export default Form
