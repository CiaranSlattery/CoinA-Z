package az.coin.backendapp.portfolioTracker.entity;

import az.coin.backendapp.user.User;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "portfolio")
public class Portfolio {

    @Id
    @GeneratedValue
    private Long id;
    private String assetName;
    private Double purchasePrice;
    private Instant purchaseDateTime;
    private Double quantity;
    @ManyToOne(targetEntity = User.class)
    @JoinColumn(name = "user_id")
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Portfolio{" +
                "id=" + id +
                ", assetName='" + assetName + '\'' +
                ", purchasePrice=" + purchasePrice +
                ", purchaseDateTime=" + purchaseDateTime +
                ", quantity=" + quantity +
                ", user=" + user +
                '}';
    }
}