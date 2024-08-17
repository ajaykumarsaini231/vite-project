function Form({value,heading}){
    return<>
     <form action="" className="form">
        <h4 className="text-align-center">{heading}</h4>
       <p>
            <label htmlFor="first_name">First Name</label>
            <input type="text" id="first_name" placeholder="First name" required/>
       </p>
       <p>
       <label htmlFor="last_name">Last Name</label>
       <input type="text" id="last_name" placeholder="Last name" required />
       </p>
       <p>
       <label htmlFor="Job-title">Job Title</label>
       <select id="Job-title"  required>
        <option value="" disabled>Job Title</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
       </p>
       <p>
       <label htmlFor="email">Work Email</label>
       <input type="text" id="email" placeholder="Email" required /> 
       </p>
      <p>
       <label htmlFor="Company">Company</label>
      <input type="text" id="Company" placeholder="Company" required />
      </p>
       <p>
       <label htmlFor="employees">Employees</label> 
        <select id="employees"  required>
        <option value="" disabled>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select>
       </p>
       <p>
       <label htmlFor="phone">Phone Number</label>
       <input type="text" id="phone" placeholder="Phone" required /> 
       </p>
        <p>
        <label htmlFor="country">Country</label>       
        <select id="country"  required>
        <option value="India" disabled>Select an option</option>
        <option value="option1">China</option>
        <option value="option2">America</option>
        <option value="option3">Saudi Arab</option>
        </select> 
       </p> 
       
       <p className="text-align-center">
       By registering, you confirm that you agree to the storing and processing of your personal data by Salesforce as described in the Privacy Statement.
       </p>
       <p>
       <input className="btn btn-primary"  type="submit" id="submit" value={value}/>
       </p>
     </form>


     
    </>
}

export default Form;