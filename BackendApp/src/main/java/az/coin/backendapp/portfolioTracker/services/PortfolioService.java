package az.coin.backendapp.portfolioTracker.services;

import az.coin.backendapp.portfolioTracker.dto.PortfolioDTO;
import az.coin.backendapp.portfolioTracker.entity.Portfolio;
import az.coin.backendapp.portfolioTracker.repository.PortfolioRepository;
import az.coin.backendapp.user.User;
import az.coin.backendapp.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserService userService;

    public PortfolioDTO create(PortfolioDTO portfolioDTO) {
        Portfolio portfolio = portfolioDTOToPortfolioEntity(portfolioDTO);
        Portfolio createdPortfolio = portfolioRepository.save(portfolio);
        return portfolioEntityToPortfolioDTO(createdPortfolio);
    }

    public PortfolioDTO update(PortfolioDTO portfolioDTO) {
        Optional<Portfolio> portfolioOp = portfolioRepository.findById(portfolioDTO.getId());
        Portfolio updatedPortfolio = new Portfolio();
        if (portfolioOp.isPresent()) {
            Portfolio portfolio = portfolioOp.get();
            portfolio.setPurchasePrice(portfolioDTO.getPurchasePrice());
            portfolio.setQuantity(portfolioDTO.getQuantity());
            updatedPortfolio = portfolioRepository.save(portfolio);
        } else {
            // handle exception
        }
        return portfolioEntityToPortfolioDTO(updatedPortfolio);
    }

    public List<PortfolioDTO> findByUserId(Long userId) {
        List<Portfolio> portfolios = portfolioRepository.findByUserId(userId);
        return portfolios.stream()
                .map(this::portfolioEntityToPortfolioDTO)
                .collect(Collectors.toList());
    }

    public Portfolio portfolioDTOToPortfolioEntity(PortfolioDTO portfolioDTO) {
        Portfolio portfolio = new Portfolio();
        portfolio.setId(portfolioDTO.getId());
        portfolio.setAssetName(portfolioDTO.getAssetName());
        portfolio.setPurchaseDateTime(portfolioDTO.getPurchaseDateTime());
        portfolio.setPurchasePrice(portfolioDTO.getPurchasePrice());
        portfolio.setQuantity(portfolioDTO.getQuantity());
        User user = userService.findByUserId(portfolioDTO.getUserId());
        portfolio.setUser(user);
        return portfolio;
    }

    public PortfolioDTO portfolioEntityToPortfolioDTO(Portfolio portfolio) {
        PortfolioDTO portfolioDTO = new PortfolioDTO();
        portfolioDTO.setId(portfolio.getId());
        portfolioDTO.setAssetName(portfolio.getAssetName());
        portfolioDTO.setPurchaseDateTime(portfolio.getPurchaseDateTime());
        portfolioDTO.setPurchasePrice(portfolio.getPurchasePrice());
        portfolioDTO.setQuantity(portfolio.getQuantity());
        portfolioDTO.setUserId(portfolio.getUser().getId());
        return portfolioDTO;
    }

    public void deleteById(Long id) {
        portfolioRepository.deleteById(id);
    }
}
