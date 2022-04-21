package az.coin.backendapp.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins={"http://54.247.123.110/", "http://coina-z.com", "https://coina-z.com", "http://localhost:3000"})
public class BasicAuthenticationController {
    //bean
    @GetMapping(path="/basicauth")
    public AuthenticationBean helloWorldBean(){
        return new AuthenticationBean("You are authenticated");
    }
}
