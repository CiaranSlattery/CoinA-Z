package az.coin.backendapp.portfolioTracker.repository;

import az.coin.backendapp.portfolioTracker.entity.Portfolio;
import az.coin.backendapp.portfolioTracker.entity.PortfolioTest;
import az.coin.backendapp.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PortfolioRepositoryTest extends JpaRepository<PortfolioTest, Long> {
    List<PortfolioTest> findByUsername(String username);
}
