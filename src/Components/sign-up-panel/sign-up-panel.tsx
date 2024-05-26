import { NavLink } from "react-router-dom";

import facebook from '../../assets/icons/facebook (white).png';
import google from '../../assets/icons/google.png';
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignUpPanel() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [campus, setCampus] = useState<string>('');
  const [course, setCourse] = useState<string>('');

  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e:any) => {
    e.preventDefault()
    signup(email, password, firstName, lastName, username, school, campus, course)
  }
  
    return (
 
    );
  }
  
  export default SignUpPanel;
  