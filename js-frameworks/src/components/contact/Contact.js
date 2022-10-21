import "../../App.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const schema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name").min(2,"enter valid firstname"),
    lastname: yup.string().required("Please enter your last name").min(2,"enter valid lastname"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Contact Form</h2>
          <br></br>
          <p>Firstname:</p>
            <input {...register("firstname")} />
            {errors.firstname && <span>{errors.firstname.message}</span>}
            <p>Lastname:</p>
            <input {...register("lastname")} />
            {errors.lastname && <span>{errors.lastname.message}</span>}
            <p>Email:</p>
            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}
            <br></br>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <p>Message:</p>
            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <button>Send</button>
        </form>
    );
}

export default Form;



