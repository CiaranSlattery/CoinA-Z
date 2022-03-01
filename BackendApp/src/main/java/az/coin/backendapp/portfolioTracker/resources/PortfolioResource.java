package az.coin.backendapp.portfolioTracker.resources;

import az.coin.backendapp.portfolioTracker.dto.PortfolioDTO;
import az.coin.backendapp.portfolioTracker.services.PortfolioService;
import az.coin.backendapp.user.User;
import az.coin.backendapp.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.Instant;
import java.util.List;


@RestController
@RequestMapping("/portfolio")
public class PortfolioResource {

    @Autowired
    private PortfolioService portfolioService;

    @Autowired
    private UserService userService;

    @PostMapping
    public PortfolioDTO save(@RequestBody PortfolioDTO portfolioDTO, Principal principal) {
        String userName = principal.getName();
        User user = userService.findByUserName(userName);
        portfolioDTO.setUserId(user.getId());
        portfolioDTO.setPurchaseDateTime(Instant.now());
        return portfolioService.create(portfolioDTO);
    }

    @PutMapping
    public PortfolioDTO update(@RequestBody PortfolioDTO portfolioDTO) {

        return portfolioService.update(portfolioDTO);
    }

    @GetMapping("/{userName}")
    public List<PortfolioDTO> getPortfoliosByUser(@PathVariable String userName) {
        User user = userService.findByUserName(userName);
        return portfolioService.findByUserId(user.getId());
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        portfolioService.deleteById(id);
    }


}
