import React from "react";
import { Container } from "../../components/Header/styles";

function SignIn() {
    return (

        <Container>
         <section>
             <div>
                 <h1>Sign in</h1>
                 <p>Dê o Start na sua Carreira!</p>
             </div>
             <form action="">
                 <input type="email" name="" id="" placeholder="Email"/>
                 <input type="password" name="" id="" placeholder="Senha"/>
             </form>
         </section>
        </Container>
    )
}

export default SignIn;