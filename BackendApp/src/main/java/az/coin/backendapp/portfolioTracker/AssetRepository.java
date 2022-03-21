package az.coin.backendapp.portfolioTracker;

import az.coin.backendapp.portfolioTracker.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
    List<Asset> findByUsername(String username);

}
