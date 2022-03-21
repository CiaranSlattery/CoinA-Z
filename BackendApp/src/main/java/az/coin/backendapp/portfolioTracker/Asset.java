package az.coin.backendapp.portfolioTracker;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "asset")
public class Asset {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String symbol;
    private Float quantity;

    public Asset(){

    }

    public Asset(long id, String username, String symbol){
        this.id = id;
        this.username = username;
        this.symbol = symbol;

    }

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getSymbol() { return symbol; }

    public void setSymbol(String symbol) { this.symbol = symbol; }

    @Override
    public String toString() {
        return "Asset{" +
                "id=" + id +
                ", symbol='" + symbol + '\'' +
                ", name='" + username + '\'' +
                '}';
    }
}
