import React from "react";
import { Button } from "react-bootstrap"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form";
import { useEffect } from "react";


const ValidatedLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      myAge: 20,
    },
  });

  useEffect(() => {
    console.log("rerender");
  });

  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset();
  };
    return(
      <div className="wrapper  d-flex justify-content-center align-items-center w-100">
        <div class="container mt-3">
  <h3>Form Validation</h3>
  <p>Try to submit the all fields form.</p>
    
  <form action="/action_page.php" class="was-validated" onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Name:</label>
      <input type="text" class="form-control  " id="uname" placeholder="Enter username" name="uname" required 
        {...register("firstName", {
          required: "This field is required",
          minLength: {
            value: 5,
            message: "Please enter 4 character",
          },
        })}/>
        <span className="errorMsg">{errors.firstName?.message}</span>
      <div class="valid-feedback">Valid.</div>
      {/* <div class="invalid-feedback">Please fill out this field.</div> */}
    </div>
    <div class="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required
     
     {...register("email", {
       required: "This field is required",
       pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
     })}/>
     <span className="errorMsg">
              {errors.email && "Please enter valid email address."}
            </span>
    <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this email.</div>
  </div>
  <div className="formInput">
            <label>Age:</label>&nbsp;&nbsp;
            <input
              type="number"
              {...register("myAge", {
                required: true,
                pattern: /^[0-9]*$/,
              })}
            />

            <span className="errorMsg">
              {errors.age && "Please enter age and valid number."}
            </span>
          </div>
    <div class="mb-3">
      <label for="pwd" class="form-label">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required  
        {...register("password", {
          required: true,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
        })}/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
      <span className="errorMsg">
              {errors.password &&
                "please eter valid paswrd"}
            </span>
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" id="myCheck"  name="remember"  required 
      
      />
      <label class="form-check-label" for="myCheck">I agree on blabla.</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Check this checkbox to continue.</div>
    </div>
    <div class="form-check mb-3">
      <input type="radio" class="form-check-input" id="radio1" name="optradio"  value="true" required 
       {...register("radio", {
        required: true,
        required:false,
      })}
      />
      <label class="form-check-label" for="radio1" >RadioButton</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Check this RadioButton to continue.</div>
    </div>
    <div class="form-check mb-3">
      <input type="checkbox" class="form-check-input" id="check1" name="option1" value="true" required 
        {...register("checkbox", {
          required: true,
          required:false,
        })}
       />
      <label class="form-check-label" for="check1">checkbox</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Check this checkbox to continue.</div>
      
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="TRUE" required 
        {...register("checkbox", {
          required: true,
          required:false,
        })}
       />
      <label class="form-check-label" for="mySwitch">Dark Mode</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Check this dark mode to continue.</div>
    </div><br />
    <div className="formInput">
            <label>Gender:</label>&nbsp; &nbsp;
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div><br />
  <button type="submit" class="btn btn-primary">Submit</button>
  
  </form>
</div>

      </div>



    )
}
export default ValidatedLoginForm;