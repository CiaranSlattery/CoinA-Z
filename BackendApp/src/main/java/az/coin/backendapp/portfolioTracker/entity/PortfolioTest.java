package az.coin.backendapp.portfolioTracker.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "portfoliotest")
public class PortfolioTest {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;

    public PortfolioTest(){

    }

    public PortfolioTest(long id, String username) {
        this.id = id;
        this.username = username;

    }

    public Long getId() {
            return id;
        }

    public void setId(Long id) {
            this.id = id;
        }

    public String getUsername() {
            return username;
        }

    public void setUsername(String username) {
            this.username = username;
        }

    @Override
    public boolean equals(Object o) {
         if (this == o) return true;
         if (o == null || getClass() != o.getClass()) return false;
        PortfolioTest portfolioTest = (PortfolioTest) o;
         if (id != portfolioTest.id)
             return false;
         return true;
    }
}
