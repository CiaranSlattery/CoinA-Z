package az.coin.backendapp.portfolioTracker.dto;

import java.time.Instant;

public class PortfolioDTO {

    private Long id;
    private String assetName;
    private Double purchasePrice;
    private Instant purchaseDateTime;
    private Double quantity;
    private Long userId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAssetName() {
        return assetName;
    }

    public void setAssetName(String assetName) {
        this.assetName = assetName;
    }

    public Double getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(Double purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public Instant getPurchaseDateTime() {
        return purchaseDateTime;
    }

    public void setPurchaseDateTime(Instant purchaseDateTime) {
        this.purchaseDateTime = purchaseDateTime;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "PortfolioDTO{" +
                "id=" + id +
                ", assetName='" + assetName + '\'' +
                ", purchasePrice=" + purchasePrice +
                ", purchaseDateTime=" + purchaseDateTime +
                ", quantity=" + quantity +
                ", userId=" + userId +
                '}';
    }
}