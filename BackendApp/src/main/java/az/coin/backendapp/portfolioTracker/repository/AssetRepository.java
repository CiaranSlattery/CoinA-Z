package az.coin.backendapp.portfolioTracker.repository;

import az.coin.backendapp.portfolioTracker.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {

}
