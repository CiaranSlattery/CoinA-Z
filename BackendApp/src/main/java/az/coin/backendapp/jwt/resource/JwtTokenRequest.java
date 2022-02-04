package az.coin.backendapp.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWFyYW4iLCJleHAiOjE2NDM3NDE2NzgsImlhdCI6MTY0MzEzNjg3OH0.pVi7V5A4iMBIlNJ8PNSaI335HyRuTNN4-GVE50s-V4zvveBnUTxpCM-XUWRIZL0LFHEKuZYU2cEQi0ClX9YXdg"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
