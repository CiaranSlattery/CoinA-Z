//package az.coin.backendapp.portfolioTracker;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.client.RestTemplate;
//
//@RestController
//@CrossOrigin(origins="http://localhost:3000")
//public class PortfolioController {
//
//    @Autowired
//
//    @RequestMapping("/hello")
//    public String hello() {
//        return "Hello World";
//    }
//
//    @GetMapping(value = "/users/{username}/coins")
//    private String getCoins(){
//        String uri = "https://api.coingecko.com/api/v3/coins/bitcoin";
//        RestTemplate restTemplate = new RestTemplate();
//        String result = restTemplate.getForObject(uri, String.class);
//        return result;
//    }
//
//}
