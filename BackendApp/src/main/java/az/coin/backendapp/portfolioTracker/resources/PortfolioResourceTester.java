package az.coin.backendapp.portfolioTracker.resources;

import az.coin.backendapp.portfolioTracker.entity.Portfolio;
import az.coin.backendapp.portfolioTracker.entity.PortfolioTest;
import az.coin.backendapp.portfolioTracker.repository.PortfolioRepositoryTest;
import az.coin.backendapp.todo.Todo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class PortfolioResourceTester {

    private PortfolioRepositoryTest portfolioRepositoryTest;

    @GetMapping("/jpa/users/{username}/userportfolio")
    public List<PortfolioTest> getAllPortfolio(@PathVariable String username) {
        return portfolioRepositoryTest.findByUsername(username);
    }
}
