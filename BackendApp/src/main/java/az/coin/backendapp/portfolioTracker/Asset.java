package az.coin.backendapp.portfolioTracker;

import javax.persistence.*;

@Entity
@Table(name = "asset")
public class Asset {

    @Id
    private String id;
    private String username;
    private String currency;
    private Float quantity;

    public String getId() { return id; }

    public void setId(String id) { this.id = id; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getCurrency() { return currency; }

    public void setCurrency(String symbol) { this.currency = symbol; }

    public Float getQuantity() { return quantity; }

    public void setQuantity(Float quantity) { this.quantity = quantity; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Asset asset = (Asset) o;
        if (id != asset.id)
            return false;
        return true;
    }
}
